export default function Footer() {
    const links = ['Home', 'About', 'Services', 'Projects', 'Process', 'Contact']
    const goto = (id) => {
        const el = document.querySelector(`#${id.toLowerCase()}`)
        if (el) {
            const top = el.getBoundingClientRect().top + window.scrollY - 60
            window.scrollTo({ top, behavior: 'smooth' })
        }
    }

    return (
        <footer
            className="noise-bg footer-section"
            style={{
                position: 'relative',
                background: 'linear-gradient(160deg, #0c0c0c 0%, #111111 100%)',
                padding: '56px 28px 32px',
                borderTop: '1px solid rgba(192,192,192,0.08)',
            }}
        >
            {/* Top accent line */}
            <div style={{
                position: 'absolute', top: 0, left: '28px', right: '28px', height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(192,192,192,0.25), transparent)',
            }} />

            <div className="footer-inner">
                {/* Logo */}
                <div className="footer-brand" style={{ textAlign: 'center' }}>
                    <div style={{
                        fontFamily: '"DM Serif Display", serif', fontSize: '24px', color: '#ffffff', letterSpacing: '0.04em',
                        display: 'inline-block',
                    }}>
                        LAVANYA
                    </div>
                    <div style={{ width: '40px', height: '1px', background: 'rgba(192,192,192,0.3)', margin: '12px auto' }} />
                    <p style={{
                        fontFamily: '"DM Sans", sans-serif', fontSize: '12px',
                        color: 'rgba(192,192,192,0.6)', letterSpacing: '0.04em', lineHeight: 1.6,
                    }}>
                        Lavanya Construction — Building India's Future,<br />One Project at a Time
                    </p>
                </div>

                {/* Quick links — 2 columns */}
                <div className="footer-links-grid" style={{ marginTop: '36px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                    {links.map((link) => (
                        <button key={link} onClick={() => goto(link)}
                            style={{
                                background: 'none', border: 'none',
                                fontFamily: '"DM Sans", sans-serif', fontSize: '13px', color: 'rgba(255,255,255,0.75)',
                                textAlign: 'left', padding: '8px 0', cursor: 'pointer', minHeight: '44px',
                                borderBottom: '1px solid rgba(255,255,255,0.04)',
                                transition: 'color 0.2s ease',
                            }}>
                            {link}
                        </button>
                    ))}
                </div>
            </div>

            {/* Silver divider */}
            <div style={{ height: '1px', background: 'rgba(192,192,192,0.12)', margin: '28px 0' }} />

            <p style={{
                fontFamily: '"DM Sans", sans-serif', fontSize: '10px', color: 'rgba(192,192,192,0.35)',
                textAlign: 'center', margin: '0',
            }}>
                © {new Date().getFullYear()} Lavanya Construction. All rights reserved.
            </p>
        </footer>
    )
}
