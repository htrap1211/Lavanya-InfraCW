import { useEffect, useRef, useState } from 'react'

const steps = [
    { num: '01', title: 'Site Visit', desc: 'On-ground assessment and feasibility study.' },
    { num: '02', title: 'Design & Planning', desc: 'Architectural blueprints and regulatory approvals.' },
    { num: '03', title: 'Foundation', desc: 'Structural groundwork engineered for longevity.' },
    { num: '04', title: 'Construction', desc: 'Precision execution with quality materials.' },
    { num: '05', title: 'Finishing', desc: 'Interior fittings, electrical, and plumbing.' },
    { num: '06', title: 'Handover', desc: 'Final walkthrough and key delivery.' },
]

export default function ProcessSection() {
    const sectionRef = useRef(null)
    const [progress, setProgress] = useState(0)
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
            setProgress(currentProgress)

            const thresholdStep = 100 / steps.length
            const newActiveSteps = steps
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
        <section
            id="process"
            ref={sectionRef}
            className="noise-bg process-section"
            style={{
                position: 'relative',
                background: 'linear-gradient(160deg, #0f0f0f 0%, #111111 100%)',
                padding: '64px 28px',
            }}
        >
            <span className="fade-in-up" style={{
                fontFamily: '"DM Sans", sans-serif', fontSize: '10px',
                color: '#C0C0C0', letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block',
            }}>How We Work</span>
            <div className="fade-in-up" style={{ width: '36px', height: '1px', background: 'linear-gradient(90deg, #C0C0C0, transparent)', margin: '10px 0 0' }} />

            <h2 className="fade-in-up" style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: '36px', color: '#ffffff', marginTop: '16px', lineHeight: 1.15, letterSpacing: '-0.01em',
                marginBottom: '48px',
            }}>
                LAVANYA<br />
                <em style={{ fontStyle: 'italic', color: '#C0C0C0' }}>Our Process</em>
            </h2>

            {/* Timeline Wrapper */}
            <div className="process-timeline" style={{ position: 'relative', paddingLeft: '36px' }}>

                <div className="process-track-bg" style={{
                    position: 'absolute', left: '5px', top: '8px', bottom: '8px', width: '2px',
                    background: 'rgba(192,192,192,0.1)',
                }} />

                <div className="process-track-fill" style={{
                    position: 'absolute', left: '5px', top: '8px', width: '2px',
                    height: `calc(${progress}% - 16px)`,
                    background: '#ffffff',
                    boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                    transition: 'height 0.2s ease-out',
                    zIndex: 2,
                }} />

                {steps.map((step, i) => {
                    const isActive = activeSteps.includes(i)

                    return (
                        <div key={step.num} className="process-step" style={{
                            position: 'relative',
                            paddingBottom: i < steps.length - 1 ? '56px' : 0,
                            opacity: isActive ? 1 : 0.4,
                            transform: isActive ? 'translateX(0)' : 'translateX(-8px)',
                            transition: 'all 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}>
                            {/* Node Circle */}
                            <div className="process-node" style={{
                                position: 'absolute', left: '-33px', top: '5px',
                                width: '10px', height: '10px', borderRadius: '50%',
                                background: isActive ? '#ffffff' : '#222222',
                                border: isActive ? 'none' : '1px solid rgba(192,192,192,0.2)',
                                boxShadow: isActive ? '0 0 12px rgba(255,255,255,0.9)' : 'none',
                                transition: 'all 0.5s ease',
                            }} />

                            <span style={{
                                fontFamily: '"DM Serif Display", serif', fontSize: '24px',
                                background: 'linear-gradient(135deg, #ffffff 40%, #9a9a9a 100%)',
                                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                            }}>{step.num}</span>
                            <h3 style={{
                                fontFamily: '"DM Serif Display", serif', fontSize: '18px',
                                color: '#ffffff', margin: '6px 0 6px',
                            }}>{step.title}</h3>
                            <p style={{
                                fontFamily: '"DM Sans", sans-serif', fontSize: '12px',
                                color: 'rgba(192,192,192,0.7)', lineHeight: 1.6,
                            }}>{step.desc}</p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
