'use client'

import { useEffect, useState } from 'react'

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const entriesMap = new Map<string, number>()

    const handle = () => {
      let best = { id: ids[0], ratio: 0 }
      entriesMap.forEach((ratio, id) => {
        if (ratio > best.ratio) best = { id, ratio }
      })
      if (best.ratio > 0) setActive(best.id)
    }

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => { entriesMap.set(id, e.intersectionRatio) })
          handle()
        },
        { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(ids)])

  return active
}
