import { useEffect, useRef } from 'react'

const services = [
    { num: '01', name: 'Residential Construction', desc: 'Bespoke villas to large complexes — homes designed for living, built to endure.' },
    { num: '02', name: 'Commercial Construction', desc: 'Office buildings, retail spaces, and mixed-use developments for modern business.' },
    { num: '03', name: 'Industrial Projects', desc: 'Warehouses, factories, and industrial facilities with structural integrity at their core.' },
    { num: '04', name: 'Infrastructure Development', desc: 'Roads, bridges, utilities, and public infrastructure built for longevity.' },
    { num: '05', name: 'Interior Fit-Outs', desc: 'Premium interiors combining aesthetics and functionality — concept to completion.' },
    { num: '06', name: 'Project Management & Consultancy', desc: 'End-to-end management, cost planning, and expert consultancy for complex builds.' },
]

export default function ServicesSection() {
    const rowRefs = useRef([])

    useEffect(() => {
        const observers = rowRefs.current.map((el) => {
            if (!el) return null
            const obs = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
                { threshold: 0.15 }
            )
            obs.observe(el)
            return obs
        })
        return () => observers.forEach((o) => o?.disconnect())
    }, [])

    return (
        <section
            id="services"
            className="noise-bg services-section"
            style={{
                position: 'relative',
                background: 'linear-gradient(160deg, #141414 0%, #0d0d0d 100%)',
                padding: '64px 28px',
            }}
        >
            {/* Faint radial center glow */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 1,
                background: 'radial-gradient(ellipse at 50% 0%, rgba(192,192,192,0.06) 0%, transparent 60%)',
                pointerEvents: 'none',
            }} />

            <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', marginBottom: '48px' }}>
                <span style={{
                    fontFamily: '"DM Sans", sans-serif', fontSize: '10px',
                    color: '#C0C0C0', letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block',
                }}>What We Build</span>
                <div style={{ width: '36px', height: '1px', background: 'linear-gradient(90deg, transparent, #C0C0C0, transparent)', margin: '10px auto 32px' }} />

                <h2 style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontSize: '36px', color: '#ffffff', lineHeight: 1.15, letterSpacing: '-0.01em',
                }}>
                    LAVANYA<br />
                    <em style={{ fontStyle: 'italic', color: '#C0C0C0' }}>Our Expertise</em>
                </h2>
            </div>

            <div className="services-grid" style={{
                position: 'relative', zIndex: 2,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0',
            }}>
                {services.map((s, i) => {
                    const isRight = i % 2 === 1
                    const isBottom = i >= 4
                    return (
                        <div
                            key={s.num}
                            ref={(el) => (rowRefs.current[i] = el)}
                            className="fade-in-up"
                            style={{
                                padding: '32px 16px',
                                borderRight: isRight ? 'none' : '1px solid rgba(192,192,192,0.10)',
                                borderBottom: isBottom ? 'none' : '1px solid rgba(192,192,192,0.10)',
                            }}
                        >
                            <div style={{
                                fontFamily: '"DM Serif Display", serif',
                                fontSize: '32px',
                                lineHeight: 1,
                                marginBottom: '12px',
                                color: '#ffffff',
                                background: 'linear-gradient(135deg, #ffffff 40%, #9a9a9a 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                {s.num}
                            </div>
                            <h3 style={{
                                fontFamily: '"DM Serif Display", serif', fontSize: '16px',
                                color: '#ffffff', lineHeight: 1.2, marginBottom: '8px',
                            }}>{s.name}</h3>
                            <p style={{
                                fontFamily: '"DM Sans", sans-serif', fontSize: '12px',
                                color: 'rgba(192,192,192,0.7)', lineHeight: 1.6,
                            }}>{s.desc}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
