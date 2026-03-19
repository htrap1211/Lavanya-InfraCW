import { useEffect, useRef, useState } from 'react'

const values = [
    { icon: '🛡️', title: 'Integrity', desc: 'Transparent dealings and honest commitments at every stage.' },
    { icon: '⚙️', title: 'Safety', desc: 'Zero-compromise safety protocols protecting every worker and site.' },
    { icon: '✦', title: 'Quality', desc: 'Premium materials and meticulous craftsmanship in every build.' },
    { icon: '🤝', title: 'Client Focus', desc: 'Your vision drives every decision from blueprint to handover.' },
    { icon: '🌱', title: 'Sustainability', desc: 'Eco-conscious methods reducing environmental impact.' },
    { icon: '⏱️', title: 'Timeliness', desc: 'On-schedule delivery without cutting corners.' },
]

export default function ValuesSection() {
    const sectionRef = useRef(null)
    const [activeSteps, setActiveSteps] = useState([])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting)
                    entry.target.querySelectorAll('.fade-in-up').forEach((el) => el.classList.add('visible'))
            }),
            { threshold: 0.1 }
        )
        if (sectionRef.current) observer.observe(sectionRef.current)

        const handleScroll = () => {
            if (!sectionRef.current) return
            const rect = sectionRef.current.getBoundingClientRect()
            const sectionHeight = rect.height
            const viewportHeight = window.innerHeight
            const scrolledInto = viewportHeight - rect.top
            const totalScrollableDistance = sectionHeight + viewportHeight
            const currentProgress = Math.min(Math.max((scrolledInto / totalScrollableDistance) * 100, 0), 100)

            const thresholdStep = 100 / values.length
            const newActiveSteps = values
                .map((_, index) => currentProgress >= (index * thresholdStep) ? index : -1)
                .filter(i => i !== -1)
            setActiveSteps(newActiveSteps)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        handleScroll()

        return () => {
            observer.disconnect()
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <section id="values" ref={sectionRef} className="values-section" style={{ backgroundColor: '#ffffff', padding: '64px 28px' }}>
            <span className="fade-in-up" style={{
                fontFamily: '"DM Sans", sans-serif', fontSize: '10px',
                color: '#6B6B6B', letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block',
            }}>What We Stand For</span>
            <div className="fade-in-up" style={{ width: '36px', height: '1px', background: 'linear-gradient(90deg, #C0C0C0, transparent)', margin: '10px 0 0' }} />

            <h2 className="fade-in-up" style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: '36px', color: '#111111', marginTop: '16px', lineHeight: 1.15, letterSpacing: '-0.01em',
                marginBottom: '40px',
            }}>
                LAVANYA<br />
                <em style={{ fontStyle: 'italic', color: '#6B6B6B' }}>The Pillars We Stand On</em>
            </h2>

            <div className="values-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                {values.map((v, i) => {
                    const isRight = i % 2 === 1
                    const isBottom = i >= 4
                    const isActive = activeSteps.includes(i)

                    return (
                        <div key={v.title} style={{
                            padding: '28px 16px',
                            borderRight: isRight ? 'none' : '1px solid rgba(192,192,192,0.15)',
                            borderBottom: isBottom ? 'none' : '1px solid rgba(192,192,192,0.15)',
                            opacity: isActive ? 1 : 0.3,
                            transform: isActive ? 'translateY(0)' : 'translateY(8px)',
                            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}>
                            <div style={{ fontSize: '24px', marginBottom: '12px' }}>{v.icon}</div>
                            <h3 style={{
                                fontFamily: '"DM Serif Display", serif', fontSize: '18px',
                                color: isActive ? '#111111' : '#999999',
                                marginBottom: '8px', transition: 'color 0.5s ease',
                            }}>{v.title}</h3>
                            <p style={{
                                fontFamily: '"DM Sans", sans-serif', fontSize: '12px',
                                color: isActive ? '#6B6B6B' : '#bbbbbb',
                                lineHeight: 1.6, transition: 'color 0.5s ease',
                            }}>{v.desc}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
