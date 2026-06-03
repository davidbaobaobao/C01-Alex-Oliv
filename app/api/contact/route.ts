import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  let body: { name: string; email: string; message: string }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Solicitud inválida.' }, { status: 400 })
  }

  const { name, email, message } = body

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: 'Faltan campos obligatorios.' }, { status: 422 })
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    return NextResponse.json({ error: 'Email no válido.' }, { status: 422 })
  }

  const toEmail = process.env.CONTACT_TO_EMAIL ?? 'web@alexoliveras.cat'

  try {
    await resend.emails.send({
      from: 'Àlex Oliveras Web <noreply@yele.design>',
      to: toEmail,
      replyTo: email,
      subject: `Consulta — ${name}`,
      html: `
        <p><strong>Nombre / Organización:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('[contact] Resend error:', err)
    return NextResponse.json({ error: 'Error al enviar el mensaje.' }, { status: 500 })
  }
}
