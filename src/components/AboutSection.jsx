import { useEffect, useRef } from 'react'

export default function AboutSection() {
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting)
                    entry.target.querySelectorAll('.fade-in-up').forEach((el) => el.classList.add('visible'))
            }),
            { threshold: 0.12 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="about" ref={ref} className="about-section" style={{ backgroundColor: '#F5F5F5', padding: '64px 28px' }}>
            <div className="about-layout">
                <div className="about-text">
                    <span className="fade-in-up" style={{
                        fontFamily: '"DM Sans", sans-serif', fontSize: '10px',
                        color: '#6B6B6B', letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block',
                    }}>Who We Are</span>
                    <div className="fade-in-up" style={{ width: '36px', height: '1px', background: 'linear-gradient(90deg, #C0C0C0, transparent)', margin: '10px 0 0' }} />

                    <h2 className="fade-in-up" style={{
                        fontFamily: '"DM Serif Display", serif',
                        fontSize: '36px', color: '#111111', marginTop: '16px', lineHeight: 1.15, letterSpacing: '-0.01em',
                    }}>
                        LAVANYA<br />
                        <em style={{ fontStyle: 'italic', color: '#6B6B6B' }}>Four Decades of Trust</em>
                    </h2>
                </div>

                <div className="about-cards">
                    {/* Mission card — dark with gradient shimmer */}
                    <div className="fade-in-up" style={{
                        marginTop: '36px', borderRadius: '16px', padding: '32px 28px',
                        background: 'linear-gradient(135deg, #161616 0%, #111111 60%, #1a1a1a 100%)',
                        position: 'relative', overflow: 'hidden',
                        boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                    }}>
                        {/* Shimmer accent */}
                        <div style={{
                            position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
                            background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.3), transparent)',
                        }} />
                        <div style={{
                            position: 'absolute', top: '-40px', right: '-20px', width: '120px', height: '120px',
                            borderRadius: '50%',
                            background: 'radial-gradient(circle, rgba(192,192,192,0.06) 0%, transparent 70%)',
                        }} />
                        <h3 style={{
                            fontFamily: '"DM Serif Display", serif', fontSize: '22px', color: '#ffffff', marginBottom: '14px',
                        }}>Our Mission</h3>
                        <p style={{
                            fontFamily: '"DM Sans", sans-serif', fontSize: '13px',
                            color: 'rgba(192,192,192,0.8)', lineHeight: 1.8,
                        }}>
                            "To build structures that outlast trends — combining 40 years of craftsmanship with modern engineering to deliver projects our clients are proud of for generations."
                        </p>
                    </div>

                    {/* Vision card — clean white with silver border */}
                    <div className="fade-in-up" style={{
                        marginTop: '16px', borderRadius: '16px', padding: '32px 28px',
                        background: '#ffffff',
                        border: '1px solid rgba(192,192,192,0.35)',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.04)',
                        position: 'relative',
                    }}>
                        <div style={{
                            position: 'absolute', bottom: 0, right: '28px',
                            fontFamily: '"DM Serif Display", serif', fontSize: '64px',
                            color: '#F0F0F0', lineHeight: 1, userSelect: 'none',
                        }}>V</div>
                        <h3 style={{
                            fontFamily: '"DM Serif Display", serif', fontSize: '22px', color: '#111111', marginBottom: '14px',
                        }}>Our Vision</h3>
                        <p style={{
                            fontFamily: '"DM Sans", sans-serif', fontSize: '13px',
                            color: '#6B6B6B', lineHeight: 1.8, position: 'relative', zIndex: 1,
                        }}>
                            "To leave behind a skyline that reflects integrity, craftsmanship, and four decades of unwavering standards."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
