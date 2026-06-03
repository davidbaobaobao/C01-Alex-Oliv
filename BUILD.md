# BUILD.md — Àlex Oliveras
# Portfolio personal · Barcelona
# Generado por Yele · Junio 2026

---

## Identidad del cliente

```
Nombre:           Àlex Oliveras
Tipo de web:      Portfolio personal / CV digital
Sector:           Ingeniería de telecomunicaciones — 5G RAN
Ciudad:           Barcelona
Teléfono:         608 253 699
WhatsApp href:    https://wa.me/34608253699?text=Hola%20Àlex%2C%20me%20gustaría%20contactarte
Email:            web@alexoliveras.cat
Web actual:       www.alexoliveras.cat
Empleador actual: Senior Wireless Engineer · Huawei Technologies
Disponibilidad:   Disponible para proyectos
Idiomas:          Català · Castellano · English
```

---

## Referencia visual (IMPORTANTE)

El diseño viene de un frontend pre-construido en Emergent AI.
Está disponible en: https://github.com/davidbaobaobao/EM-Alex-Oliv

Clónalo antes de construir nada:
```bash
git clone https://github.com/davidbaobaobao/EM-Alex-Oliv.git reference
```

Lee cada archivo en `reference/frontend/src/` antes de escribir una sola línea.
El objetivo: replicar exactamente el mismo diseño, tipografía, animaciones,
efectos de scroll, hover states y comportamiento interactivo — pero en Next.js 14.

---

## Variables de entorno

```
NEXT_PUBLIC_SUPABASE_URL=https://wdnwacdkoowrrnyaskjl.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[anon key — pedir a David]
NEXT_PUBLIC_CLIENT_ID=10260e80-001f-4027-8491-afd5aa26eb58
```

---

## Páginas

```
/                     → Portfolio completo (one-page, anchor navigation)
/aviso-legal          → Página legal obligatoria
/politica-de-privacidad → Política RGPD obligatoria
```

---

## Secciones — orden y configuración

### 00 · NAVEGACIÓN
```
tipo:     estática
layout:   Fixed sticky. Transparente sobre el hero, fondo sólido al hacer scroll.
          Links de anclaje a cada sección. Indicador de sección activa.
mobile:   Menú overlay full-screen, items con stagger animation.
```

---

### 01 · HERO
```
tipo:     estática
layout:   Full viewport height. Nombre grande y dominante.
          Título y especialización visibles.
          Indicador de disponibilidad (badge).
          Scroll cue en la parte inferior.
```

Contenido:
```
Nombre:          Àlex Oliveras
Título:          Wireless Communications Engineer
Especialización: 5G RAN · Massive MIMO · RF Planning
Ubicación:       Barcelona, ES — 41.3851° N, 2.1734° E
Disponibilidad:  Disponible para proyectos
Empleador:       Senior Wireless Engineer · Huawei Technologies
```

---

### 02 · SOBRE MÍ
```
tipo:     dinámica
table:    team_members
filter:   client_id = NEXT_PUBLIC_CLIENT_ID, visible = true
fields:   name, role, bio, photo_url
layout:   Split asimétrico: texto izquierda, foto derecha.
          Credenciales como pills/stats debajo de la bio.
```

Datos seed para Supabase (usar exactamente este texto):
```
name:      Àlex Oliveras
role:      PhD · Wireless Communications Engineer · 5G RAN
photo_url: [foto del cliente — usar placeholder hasta tener foto real]
bio:
  "PhD en Comunicaciones Inalámbricas por la Universidad de Aalborg. Ocho años
  de experiencia en industria, actualmente liderando proyectos de radio acceso 5G
  en Huawei Technologies.

  Mi trabajo combina electromagnética, procesado estadístico de señal y mediciones
  de campo a gran escala. El objetivo es siempre el mismo: convertir espectro,
  antenas y restricciones en bits por hercio por kilómetro cuadrado fiables.

  Acepto un número reducido de proyectos freelance al año — auditorías de
  planificación RF, calibración de Massive MIMO, estudios de propagación y ML
  aplicado a RAN. Idiomas de trabajo: català, castellano, english."
```

Credenciales (hardcoded en el componente como pills):
```
- PhD · Aalborg University
- Senior Engineer · Huawei Technologies
- 5G NR · O-RAN · Massive MIMO
- 11 publicaciones revisadas por pares
- 3 patentes concedidas (EU / CN)
```

---

### 03 · SKILLS
```
tipo:     dinámica
table:    services
filter:   client_id = NEXT_PUBLIC_CLIENT_ID, visible = true
fields:   name, description, price_label (usar como métrica/etiqueta)
layout:   Lista técnica densa. Dos columnas. Agrupada por categoría.
          Barras de progreso o indicadores visuales con animación al entrar en viewport.
```

Datos seed para Supabase:
```
Categoría: Radio Access Networks
  - LTE-A Pro
  - 5G NR SA / NSA
  - O-RAN
  - RAN Sharing
  Métrica: 8 años

Categoría: 5G & NR Physical Layer
  - Sub-6 GHz
  - mmWave (26 / 28 GHz)
  - Numerología μ0-μ3
  - PRACH / SRS
  Métrica: Sub-ms

Categoría: Massive MIMO
  - 64T64R / 32T32R
  - Beamforming codebooks
  - Estimación de canal DL/UL
  - Calibración de reciprocidad
  Métrica: 64×64

Categoría: RF Planning
  - Atoll · Forsk
  - Ranplan
  - Drive tests · TEMS
  - Ray-tracing propagation
  Métrica: 850+ sites

Categoría: Python & Data Science
  - NumPy · PyTorch
  - pandas · scikit-learn
  - sionna-rt
  Métrica: Daily

Categoría: Métodos y Estándares
  - 3GPP Rel. 15–18
  - ITU-R P.1411 / P.452
  - MATLAB
  - Linux RT
  Métrica: ISO
```

---

### 04 · EXPERIENCIA
```
tipo:     estática
layout:   Timeline vertical. Línea izquierda que se dibuja hacia abajo al hacer scroll.
          Cada entrada entra desde la izquierda con la animación.
```

Contenido (hardcoded — no cambia):
```
1.
  Años:     2019 — Actualidad
  Rol:      Senior Wireless Engineer
  Empresa:  Huawei Technologies
  Lugar:    Madrid · Barcelona
  Puntos:
    - Ingeniero principal para despliegues 5G NR Sub-6 GHz y mmWave en operadores europeos top
    - Diseño de pipelines de calibración Massive MIMO en más de 800 emplazamientos AAU
    - Desarrollo del stack ML interno para rendimiento RAN: detección de anomalías, predicción de KPIs y grafos de causa raíz

2.
  Años:     2018 — 2019
  Rol:      Data Scientist · Telecom
  Empresa:  Conecta Wireless
  Lugar:    Barcelona
  Puntos:
    - Modelos de predicción de propagación a partir de logs de drive-test en entornos rurales y urbanos
    - Herramienta de planificación de frecuencias automatizada que redujo los ciclos de planificación en un 40%

3.
  Años:     2014 — 2018
  Rol:      PhD Fellow — Comunicaciones Inalámbricas
  Empresa:  Aalborg University
  Lugar:    Aalborg, Dinamarca
  Puntos:
    - Investigación doctoral en estimación de canal y contaminación de pilotos en sistemas Massive MIMO
    - Co-autor de 11 artículos revisados por pares; reviewer en IEEE Trans. Wireless Comm.
    - Investigador visitante en Tsinghua University — modelado de canal indoor mmWave
```

---

### 05 · FORMACIÓN
```
tipo:     dinámica
table:    faqs
filter:   client_id = NEXT_PUBLIC_CLIENT_ID, visible = true
fields:   question (= título del grado), answer (= institución + descripción)
layout:   Tarjetas horizontales. 3 cards. Animación scale-in al entrar en viewport.
```

Datos seed para Supabase:
```
1.
  question: PhD, Wireless Communications
  answer:   Aalborg University · Aalborg, Dinamarca · 2014–2018.
            Investigación sobre estimación de canal y contaminación de pilotos en sistemas Massive MIMO.

2.
  question: Ingeniería de Telecomunicaciones
  answer:   Universitat Politècnica de Catalunya (UPC) · Barcelona · 2008–2013.
            Mejor expediente de promoción. Especialización en teoría de señal y comunicaciones.

3.
  question: Proyecto de Intercambio — Wireless Comm. Lab
  answer:   Tsinghua University · Beijing, China · 2013.
            Campaña de medición de propagación indoor mmWave.
```

---

### 06 · PROYECTOS
```
tipo:     dinámica
table:    showcase_projects
filter:   NINGUNO — tabla global, sin filtro por client_id
fields:   usar los campos disponibles en la tabla
layout:   Grid asimétrico. Tarjeta grande (2/3 ancho) + tarjetas menores.
          Hover: lift + borde accent.
          Estado vacío: mostrar una tarjeta placeholder estilizada — nunca layout roto.
revalidate: 60
```

Nota: Esta tabla es global — Àlex añadirá sus proyectos desde el dashboard.
No hacer seed de proyectos — dejar que el cliente los gestione.

---

### 07 · CONTACTO
```
tipo:     dinámica (datos del perfil) + estática (CTAs y formulario)
table:    team_members
filter:   client_id = NEXT_PUBLIC_CLIENT_ID, visible = true
layout:   Sección de cierre, full-width oscura.
          Titular grande: "Hablemos."
          Dos CTAs principales: WhatsApp (primario) + Email (secundario)
          Formulario simple debajo.
```

CTAs (hardcoded — datos reales del cliente):
```
WhatsApp:  https://wa.me/34608253699?text=Hola%20Àlex%2C%20me%20gustaría%20contactarte
Email:     web@alexoliveras.cat
Teléfono:  608 253 699
```

Formulario:
```
Campos:   Nombre*, Email*, Mensaje*
Botón:    "Enviar mensaje"
RGPD:     Checkbox "Acepto la política de privacidad" obligatorio
Nota:     "* Campos obligatorios"
```

Nota de idiomas:
```
"También hablo català i english."
```

---

### 08 · FOOTER
```
tipo:     estático
layout:   Minimal. Una fila.
          Izquierda: "Àlex Oliveras © 2026"
          Derecha: links "Aviso Legal" y "Política de Privacidad"
          Borde superior 1px.
```

---

## Páginas legales

### /aviso-legal
```
Titular:    Àlex Oliveras
Actividad:  Ingeniero de Telecomunicaciones freelance
Contacto:   web@alexoliveras.cat
            608 253 699
Ciudad:     Barcelona
```

### /politica-de-privacidad
```
Responsable: Àlex Oliveras
Finalidad:   Gestión de consultas recibidas a través del formulario de contacto
Contacto:    web@alexoliveras.cat
Base legal:  Interés legítimo / consentimiento del usuario
Derechos:    Acceso, rectificación, supresión — contactar en web@alexoliveras.cat
```

---

## SEO

```html
<title>Àlex Oliveras | Ingeniero de Telecomunicaciones 5G · Barcelona</title>
<meta name="description" content="PhD en Comunicaciones Inalámbricas especializado en 5G RAN y Massive MIMO. Basado en Barcelona. Disponible para proyectos freelance de planificación RF y consultoría técnica." />
```

---

## Anti-patterns para este cliente

```
NO usar jerga de marketing — es un ingeniero PhD, no una startup
NO exclamaciones — el tono es preciso y seguro, nunca eufórico
NO números redondos — usar 47.2%, 312 sitios, 1.8 dB (no "50%", "cientos", "varios dB")
NO imágenes genéricas de tecnología (circuitos, servidores, código abstracto)
NO fuentes del sistema — usar la misma tipografía que el diseño de referencia
NO secciones de "servicios con precio" — es un portfolio, no una tienda
NO traducir los términos técnicos al español forzado (usar "Massive MIMO" no "MIMO Masivo")
```

---

## Notas de construcción

- Replicar exactamente el diseño visual del repo de referencia (Emergent AI)
- Todas las animaciones de scroll, parallax y hover del original deben funcionar
- Lenis smooth scroll obligatorio (ya en el reference project)
- Framer Motion para animaciones de entrada de secciones
- El portfolio es one-page con anchor navigation — no multi-página excepto las legales
- Mobile-first responsive — todas las secciones a columna única en 768px
- Cursor personalizado solo en dispositivos no táctiles (detectar con JS)
- `npm run build` debe completar sin errores antes de declarar terminado
```
