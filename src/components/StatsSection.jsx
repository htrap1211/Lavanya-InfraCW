import { useEffect, useRef } from 'react'

const stats = [
    { number: '40+', label: 'Years of Experience' },
    { number: '75+', label: 'Projects Completed' },
    { number: '25+', label: 'Team Members' },
]

export default function StatsSection() {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting)
                        entry.target.querySelectorAll('.fade-in-up').forEach((el) => el.classList.add('visible'))
                })
            },
            { threshold: 0.2 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            id="stats"
            ref={ref}
            className="noise-bg stats-section"
            style={{
                position: 'relative',
                background: 'linear-gradient(160deg, #141414 0%, #0d0d0d 100%)',
                padding: '64px 28px',
                borderTop: '1px solid rgba(192,192,192,0.08)',
            }}
        >
            {/* Faint radial center glow */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 1,
                background: 'radial-gradient(ellipse at 50% 50%, rgba(192,192,192,0.05) 0%, transparent 70%)',
                pointerEvents: 'none',
            }} />

            {/* Section label */}
            <div style={{ textAlign: 'center', marginBottom: '48px', position: 'relative', zIndex: 2 }}>
                <span className="fade-in-up" style={{
                    fontFamily: '"DM Sans", sans-serif',
                    fontSize: '10px',
                    color: '#C0C0C0',
                    letterSpacing: '0.22em',
                    textTransform: 'uppercase',
                    display: 'block',
                }}>
                    Our Track Record
                </span>
                <div className="fade-in-up" style={{
                    width: '36px', height: '1px',
                    background: 'linear-gradient(90deg, #C0C0C0, transparent)',
                    margin: '10px auto 0',
                }} />
            </div>

            {/* Stats grid */}
            <div className="stats-grid" style={{
                position: 'relative', zIndex: 2,
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '0',
            }}>
                {stats.map(({ number, label }, i) => {
                    const isRight = i % 2 === 1
                    const isBottom = i >= 2
                    return (
                        <div
                            key={label}
                            className="fade-in-up"
                            style={{
                                textAlign: 'center',
                                padding: '32px 16px',
                                borderRight: i === 2 ? 'none' : isRight ? 'none' : '1px solid rgba(192,192,192,0.10)',
                                borderBottom: isBottom ? 'none' : '1px solid rgba(192,192,192,0.10)',
                                gridColumn: i === 2 ? '1 / -1' : 'auto',
                            }}
                        >
                            <div style={{
                                fontFamily: '"DM Serif Display", serif',
                                fontSize: '60px',
                                lineHeight: 1,
                                letterSpacing: '-0.02em',
                                background: 'linear-gradient(135deg, #ffffff 40%, #9a9a9a 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text',
                            }}>
                                {number}
                            </div>
                            <div style={{
                                width: '28px', height: '1px',
                                background: 'linear-gradient(90deg, transparent, #C0C0C0, transparent)',
                                margin: '12px auto',
                            }} />
                            <div style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: '11px',
                                color: 'rgba(192,192,192,0.7)',
                                letterSpacing: '0.04em',
                                lineHeight: 1.4,
                            }}>
                                {label}
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
