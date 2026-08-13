// ============================================
// ANIMATION.JS - GSAP Scroll Animations
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // 1. SCROLL ANIMATIONS with Intersection Observer
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // ============================================
    // 2. GSAP - Hero Section Entrance
    // ============================================
    // Only run if GSAP is loaded
    if (typeof gsap !== 'undefined') {
        gsap.from('.hero-card', {
            duration: 1.2,
            opacity: 0,
            y: 40,
            ease: 'power3.out',
            delay: 0.2
        });

        gsap.from('.hero-content > div', {
            duration: 0.8,
            opacity: 0,
            y: 20,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.4
        });

        gsap.from('.hero-buttons .btn-primary, .hero-buttons .btn-secondary', {
            duration: 0.6,
            opacity: 0,
            scale: 0.95,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.8
        });

        gsap.from('.hero-social .social-link', {
            duration: 0.5,
            opacity: 0,
            y: 10,
            stagger: 0.08,
            ease: 'power3.out',
            delay: 1
        });

        // ============================================
        // 3. GSAP - Section Entrance on Scroll
        // ============================================
        if (typeof ScrollTrigger !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            // Cards stagger
            document.querySelectorAll('.about-card, .exp-card, .cert-card, .project-card, .skill-card, .stat-card, .dashboard-item').forEach((section, index) => {
                gsap.from(section, {
                    scrollTrigger: {
                        trigger: section,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    duration: 0.6,
                    opacity: 0,
                    y: 30,
                    delay: index * 0.05,
                    ease: 'power2.out'
                });
            });

            // Stats numbers - subtle animation
            document.querySelectorAll('.stat-number').forEach((stat, index) => {
                const target = stat.textContent;
                // Just animate opacity and scale
                gsap.from(stat, {
                    scrollTrigger: {
                        trigger: stat,
                        start: 'top 85%',
                        toggleActions: 'play none none reverse'
                    },
                    duration: 0.8,
                    opacity: 0,
                    scale: 0.9,
                    delay: index * 0.1,
                    ease: 'power2.out'
                });
            });
        }
    }

    // ============================================
    // 4. INTERACTIVE CARD HOVER EFFECTS
    // ============================================
    document.querySelectorAll('.project-card, .skill-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    });

    // ============================================
    // 5. HERO BACKGROUND EFFECT - Subtle parallax
    // ============================================
    const hero = document.getElementById('hero');
    if (hero) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const heroElement = hero.querySelector('.hero-container');
            if (heroElement && scrolled < window.innerHeight) {
                const offset = scrolled * 0.05;
                heroElement.style.transform = `translateY(${offset}px)`;
            }
        });
    }

    // ============================================
    // 6. TERMINAL WIDGET - Auto focus
    // ============================================
    const terminalInput = document.getElementById('terminalInput');
    if (terminalInput) {
        // Focus when user clicks anywhere on page
        document.addEventListener('click', () => {
            // Only if terminal is visible
            const container = document.getElementById('terminalWidgetContainer');
            if (container && !container.classList.contains('hidden')) {
                // But don't steal focus from form inputs
                if (!['INPUT', 'TEXTAREA', 'BUTTON'].includes(document.activeElement.tagName)) {
                    terminalInput.focus();
                }
            }
        });
    }

    // ============================================
    // 7. DASHBOARD - Animate numbers
    // ============================================
    document.querySelectorAll('.dashboard-number').forEach(el => {
        const target = el.textContent;
        const numeric = parseInt(target.replace(/[^0-9]/g, ''));
        if (!isNaN(numeric)) {
            // Store the original text for display
            const suffix = target.replace(/[0-9]/g, '');
            // We'll just let the number appear naturally
        }
    });

    console.log('🚀 Portfolio animations initialized');
});