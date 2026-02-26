import { useEffect, useRef, useState } from 'react'

const mediaFiles = import.meta.glob('../assets/album/*', { eager: true })

export default function ProjectsSection() {
    const ref = useRef(null)
    const [selectedMediaIndex, setSelectedMediaIndex] = useState(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => entries.forEach((entry) => {
                if (entry.isIntersecting)
                    entry.target.querySelectorAll('.fade-in-up').forEach((el) => el.classList.add('visible'))
            }),
            { threshold: 0.1 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    const items = Object.entries(mediaFiles).map(([path, mod]) => {
        const ext = path.split('.').pop().toLowerCase()
        const isVideo = ['mp4', 'webm', 'mov'].includes(ext)
        return { src: mod.default, isVideo, path }
    })

    const handleNext = (e) => {
        e.stopPropagation()
        setSelectedMediaIndex(prev => (prev + 1) % items.length)
    }

    const handlePrev = (e) => {
        e.stopPropagation()
        setSelectedMediaIndex(prev => (prev - 1 + items.length) % items.length)
    }

    return (
        <section id="projects" ref={ref} className="projects-section" style={{ backgroundColor: '#F5F5F5', padding: '64px 28px' }}>
            {/* Label */}
            <span className="fade-in-up" style={{
                fontFamily: '"DM Sans", sans-serif', fontSize: '10px',
                color: '#6B6B6B', letterSpacing: '0.22em', textTransform: 'uppercase', display: 'block',
            }}>Our Work</span>
            <div className="fade-in-up" style={{ width: '36px', height: '1px', background: 'linear-gradient(90deg, #C0C0C0, transparent)', margin: '10px 0 0' }} />

            <h2 className="fade-in-up" style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: '36px', color: '#111111', marginTop: '16px', lineHeight: 1.15,
                letterSpacing: '-0.01em', marginBottom: '36px',
            }}>
                LAVANYA<br />
                <em style={{ fontStyle: 'italic', color: '#6B6B6B' }}>Interactive Album</em>
            </h2>

            {/* Masonry Grid */}
            <div className="fade-in-up projects-masonry" style={{
                columnCount: 2,
                columnGap: '16px',
            }}>
                {items.map((item, i) => (
                    <div
                        key={item.path}
                        className="project-card"
                        onClick={() => setSelectedMediaIndex(i)}
                        style={{
                            marginBottom: '16px',
                            breakInside: 'avoid',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            cursor: 'pointer',
                            boxShadow: '0 4px 16px rgba(0,0,0,0.1)',
                        }}
                    >
                        {item.isVideo ? (
                            <video src={item.src} muted loop autoPlay playsInline
                                style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
                        ) : (
                            <img src={item.src} alt="" loading="lazy"
                                style={{ width: '100%', display: 'block', borderRadius: '12px' }} />
                        )}
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            {selectedMediaIndex !== null && (
                <div onClick={() => setSelectedMediaIndex(null)} style={{
                    position: 'fixed', inset: 0, zIndex: 200,
                    background: 'rgba(0,0,0,0.92)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column',
                    padding: '20px',
                }}>
                    {/* Close button */}
                    <button onClick={() => setSelectedMediaIndex(null)} style={{
                        position: 'absolute', top: '20px', right: '20px',
                        background: 'none', border: 'none', color: '#fff', fontSize: '28px', cursor: 'pointer', zIndex: 201,
                    }}>✕</button>

                    {/* Prev */}
                    <button onClick={handlePrev} style={{
                        position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
                        background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff',
                        fontSize: '24px', cursor: 'pointer', borderRadius: '50%',
                        width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 201,
                    }}>‹</button>

                    {/* Next */}
                    <button onClick={handleNext} style={{
                        position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
                        background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff',
                        fontSize: '24px', cursor: 'pointer', borderRadius: '50%',
                        width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 201,
                    }}>›</button>

                    {/* Media */}
                    <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '85vh' }}>
                        {items[selectedMediaIndex].isVideo ? (
                            <video src={items[selectedMediaIndex].src} controls autoPlay loop muted playsInline
                                style={{ maxWidth: '100%', maxHeight: '85vh', borderRadius: '8px' }} />
                        ) : (
                            <img src={items[selectedMediaIndex].src} alt=""
                                style={{ maxWidth: '100%', maxHeight: '85vh', borderRadius: '8px', objectFit: 'contain' }} />
                        )}
                    </div>

                    {/* Counter */}
                    <div style={{
                        marginTop: '12px', fontFamily: '"DM Sans", sans-serif',
                        fontSize: '12px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.04em',
                    }}>
                        {selectedMediaIndex + 1} / {items.length}
                    </div>
                </div>
            )}
        </section>
    )
}
