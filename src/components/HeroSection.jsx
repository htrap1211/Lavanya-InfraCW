import heroImg from '../assets/hero-image.jpg'

export default function HeroSection() {
    const handleScrollToProjects = () =>
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })
    const handleScrollToContact = () =>
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

    return (
        <section
            id="home"
            className="hero-section"
            style={{
                height: '100dvh',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                backgroundColor: '#111111',
            }}
        >
            {/* Background image */}
            <img
                src={heroImg}
                alt="Construction"
                loading="lazy"
                style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.45,
                }}
            />

            {/* Multi-layer atmospheric overlay */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, rgba(17,17,17,0.82) 0%, rgba(17,17,17,0.55) 50%, rgba(17,17,17,0.90) 100%)' }} />
            {/* Radial warm glow near headline */}
            <div style={{ position: 'absolute', top: '28%', left: '-20%', width: '160%', height: '50%', background: 'radial-gradient(ellipse at 40% 50%, rgba(192,192,192,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />
            {/* Horizontal light streak at top */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.25), transparent)' }} />

            {/* Main content */}
            <div
                className="hero-content"
                style={{
                    position: 'relative',
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    padding: '80px 28px 0',
                    zIndex: 2,
                }}
            >
                {/* Silver eyebrow label */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '22px' }}>
                    <span style={{ display: 'block', width: '28px', height: '1px', background: '#C0C0C0' }} />
                    <span
                        style={{
                            fontFamily: '"DM Sans", sans-serif',
                            fontSize: '10px',
                            color: '#C0C0C0',
                            letterSpacing: '0.22em',
                            textTransform: 'uppercase',
                        }}
                    >
                        Building Since 1984
                    </span>
                </div>

                {/* Main headline */}
                <h1
                    className="hero-headline"
                    style={{
                        fontFamily: '"DM Serif Display", serif',
                        fontSize: '48px',
                        color: '#ffffff',
                        lineHeight: 1.12,
                        letterSpacing: '-0.01em',
                        textShadow: '0 4px 30px rgba(255, 255, 255, 0.4)',
                    }}
                >
                    LAVANYA<br />
                    <em style={{ color: '#ffffff', fontStyle: 'italic' }}>Your Vision,</em><br />
                    Built to Last
                </h1>

                {/* CTA Button */}
                <button
                    className="hero-cta"
                    onClick={handleScrollToContact}
                    style={{
                        marginTop: '32px',
                        background: 'linear-gradient(135deg, #ffffff 0%, #f0f0f0 100%)',
                        color: '#111111',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '13px',
                        fontWeight: '700',
                        letterSpacing: '0.08em',
                        height: '52px',
                        width: '100%',
                        borderRadius: '999px',
                        border: 'none',
                        cursor: 'pointer',
                        textTransform: 'uppercase',
                        boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
                    }}
                >
                    Enquire Now
                </button>

                {/* Secondary link */}
                <button
                    onClick={handleScrollToProjects}
                    style={{
                        marginTop: '18px',
                        background: 'none',
                        border: 'none',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '12px',
                        color: 'rgba(192,192,192,0.7)',
                        cursor: 'pointer',
                        textAlign: 'center',
                        letterSpacing: '0.06em',
                    }}
                >
                    See Our Work ↓
                </button>
            </div>

            {/* Trust strip */}
            <div
                className="hero-trust-strip"
                style={{
                    position: 'relative',
                    zIndex: 2,
                    borderTop: '1px solid rgba(192,192,192,0.12)',
                    background: 'rgba(17,17,17,0.75)',
                    backdropFilter: 'blur(12px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px 0',
                }}
            >
                {['Licensed & Registered', 'Safety Compliant', 'Client-First'].map((item, i) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center' }}>
                        {i > 0 && (
                            <span style={{ display: 'block', width: '1px', height: '20px', background: 'rgba(192,192,192,0.3)', margin: '0 18px' }} />
                        )}
                        <span
                            style={{
                                fontFamily: '"DM Sans", sans-serif',
                                fontSize: '10px',
                                color: 'rgba(255,255,255,0.8)',
                                textAlign: 'center',
                                letterSpacing: '0.06em',
                            }}
                        >
                            {item}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    )
}
