'use client'

import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

type Pub = { num: number; citation: string; venue: string; year: string }

const JOURNALS: Pub[] = [
  {
    num: 3,
    citation: 'À. O. Martínez, J. Ø. Nielsen, E. De Carvalho and P. Popovski, "An experimental Study of Massive MIMO Properties in 5G Scenarios,"',
    venue: 'IEEE Transactions on Antennas and Propagation',
    year: 'Dec 2018',
  },
  {
    num: 2,
    citation: 'À. O. Martínez, P. Popovski, J. Ø. Nielsen and E. De Carvalho, "Experimental Study of the Benefits of a Second Antenna at the User Side in a Massive MIMO System,"',
    venue: 'IEEE Access',
    year: 'Dec 2017',
  },
  {
    num: 1,
    citation: 'L. Jing, E. De Carvalho, P. Popovski, À. O. Martínez, "Design and Performance Analysis of Non-Coherent Detection Systems with Massive Receiver Arrays,"',
    venue: 'IEEE Transactions on Signal Processing',
    year: 'Jul 2016',
  },
]

const CONFERENCES: Pub[] = [
  {
    num: 6,
    citation: 'À. O. Martínez, E. De Carvalho, J. Ø. Nielsen, "Massive MIMO Properties based on Measured Channels: Channel Hardening, User Decorrelation and Channel Sparsity,"',
    venue: 'Asilomar',
    year: 'Nov 2016',
  },
  {
    num: 5,
    citation: 'À. O. Martínez, P. Eggers, E. De Carvalho, "Geometry-Based Stochastic Channel Models for 5G: Extending Key Features for Massive MIMO,"',
    venue: 'PIMRC',
    year: 'Sep 2016',
  },
  {
    num: 4,
    citation: 'À. O. Martínez, E. De Carvalho, J. Ø. Nielsen, J. Lishuai, "Frequency Dependence of Measured Massive MIMO Channel Properties,"',
    venue: 'VTC',
    year: 'May 2016',
  },
  {
    num: 3,
    citation: 'W. Fan, P. Kyösti, J. Nuutinen, À. O. Martínez, J. Ø. Nielsen, G. F. Pedersen, "Generating Spatial Channel Models in Multi-probe Anechoic Chamber Setups,"',
    venue: 'VTC',
    year: 'May 2016',
  },
  {
    num: 2,
    citation: 'À. O. Martínez, E. De Carvalho, J. Ø. Nielsen, "Towards Very Large Aperture Massive MIMO: a measurement based study,"',
    venue: 'Globecom Workshop',
    year: 'Dec 2014',
  },
  {
    num: 1,
    citation: 'À. O. Martínez, E. De Carvalho, P. Popovski, G. F. Pedersen, "Energy detection using very large antenna array receivers,"',
    venue: 'Asilomar',
    year: 'Nov 2014',
  },
]

const MISC: Pub[] = [
  {
    num: 4,
    citation: 'À. O. Martínez, E. De Carvalho, P. Eggers, "Modeling and Characterization of the Massive MIMO Channel: Cooperation project Huawei – AAU,"',
    venue: 'Technical Report M9-M12',
    year: 'Oct 2015',
  },
  {
    num: 3,
    citation: 'À. O. Martínez, E. De Carvalho, P. Eggers, "Modeling of the Massive MIMO Wireless Backhaul Channel,"',
    venue: 'Technical Report M7-M8',
    year: 'May 2015',
  },
  {
    num: 2,
    citation: 'À. O. Martínez, J. Lishuai, E. De Carvalho, P. Eggers, "Modeling and Characterization of the Massive MIMO Channel: Cooperation project Huawei – AAU,"',
    venue: 'Technical Report M1-M6',
    year: 'Mar 2015',
  },
  {
    num: 1,
    citation: 'À. O. Martínez, "The impact of linear precoders on the capacity of a MIMO broadcast channel,"',
    venue: "Master's thesis, Aalborg University",
    year: 'Sep 2013',
  },
]

function PubRow({ pub, index }: { pub: Pub; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.2, 0.8, 0.2, 1] }}
      className="grid grid-cols-12 border-b border-black/20 last:border-b-0 py-5 md:py-6 group hover:bg-black hover:text-[#FAFAFA] transition-colors duration-150"
    >
      <div className="col-span-1 font-mono-tech text-[12px] uppercase tracking-[0.18em] text-black/40 group-hover:text-white/40 pt-0.5">
        {String(pub.num).padStart(2, '0')}
      </div>
      <div className="col-span-12 md:col-span-8 text-[14px] leading-[1.65] pr-4 mb-2 md:mb-0">
        {pub.citation}
      </div>
      <div className="col-span-11 md:col-span-2 font-mono-tech text-[11px] uppercase tracking-[0.14em] text-black/60 group-hover:text-white/60 pr-4">
        {pub.venue}
      </div>
      <div className="col-span-1 font-mono-tech text-[11px] uppercase tracking-[0.14em] text-black/50 group-hover:text-white/50 text-right whitespace-nowrap">
        {pub.year}
      </div>
    </motion.div>
  )
}

function GroupLabel({ label, count }: { label: string; count: number }) {
  return (
    <div className="flex items-center gap-4 py-3 border-b border-black">
      <span className="font-mono-tech text-[10px] uppercase tracking-[0.28em] text-black/50">
        {label}
      </span>
      <span className="font-mono-tech text-[10px] tracking-[0.18em] text-black/35">
        {count}
      </span>
      <span className="flex-1 h-px bg-black/15" />
    </div>
  )
}

export default function Publications() {
  return (
    <section id="publicaciones" className="relative border-b border-black bg-[#FAFAFA]">
      <SectionHeader num="06" title="Publicaciones" caption="Where I published my research" />

      <div className="mx-4 md:mx-8 mb-20">
        {/* Column headers */}
        <div className="hidden md:grid grid-cols-12 border-t border-b border-black py-3 font-mono-tech text-[10px] tracking-[0.22em] uppercase text-black/55">
          <div className="col-span-1">#</div>
          <div className="col-span-8">Referencia</div>
          <div className="col-span-2">Venue</div>
          <div className="col-span-1 text-right">Año</div>
        </div>

        {/* Journals */}
        <div className="mt-6">
          <GroupLabel label="Journals" count={JOURNALS.length} />
          {JOURNALS.map((p, i) => <PubRow key={i} pub={p} index={i} />)}
        </div>

        {/* Conferences */}
        <div className="mt-8">
          <GroupLabel label="Conferences" count={CONFERENCES.length} />
          {CONFERENCES.map((p, i) => <PubRow key={i} pub={p} index={i} />)}
        </div>

        {/* Miscellaneous */}
        <div className="mt-8">
          <GroupLabel label="Miscellaneous" count={MISC.length} />
          {MISC.map((p, i) => <PubRow key={i} pub={p} index={i} />)}
        </div>

        {/* Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 border-t border-l border-black">
          <PubLink
            href="https://vbn.aau.dk/en/publications/characterisation-and-modelling-of-measured-massive-mimo-channels"
            label="Tesis Doctoral"
            value="Aalborg University — VBN"
            sub="Characterisation and Modelling of Measured Massive MIMO Channels"
          />
          <PubLink
            href="https://www.linkedin.com/in/alex-oliveras-martinez"
            label="LinkedIn"
            value="Àlex Oliveras Martínez"
            sub="Perfil profesional completo"
          />
        </div>
      </div>
    </section>
  )
}

function PubLink({
  href,
  label,
  value,
  sub,
}: {
  href: string
  label: string
  value: string
  sub: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="block group border-r border-b border-black p-6 md:p-8 invert-hover"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="label-tech opacity-60">{label}</span>
        <span aria-hidden className="font-mono-tech text-sm">↗</span>
      </div>
      <div className="font-display text-xl md:text-2xl uppercase tracking-tight leading-tight mb-2">
        {value}
      </div>
      <div className="font-mono-tech text-[11px] uppercase tracking-[0.16em] opacity-60 max-w-[40ch] leading-[1.5]">
        {sub}
      </div>
    </a>
  )
}
