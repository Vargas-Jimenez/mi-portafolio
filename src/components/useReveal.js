import { useEffect } from 'react'

export function useReveal(selector='.card, .skill'){
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(selector))
    if(!('IntersectionObserver' in window)){
      els.forEach(el => el.classList.add('reveal'))
      return
    }
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if(e.isIntersecting){
          e.target.classList.add('reveal')
          obs.unobserve(e.target)
        }
      })
    },{ threshold: .14 })
    els.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [selector])
}
