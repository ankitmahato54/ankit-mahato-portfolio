// ============================================
// MAIN.JS - Navigation, Scroll, UI Interactions
// ============================================

// ============================================
// 1. NAVIGATION - Scroll Effect
// ============================================
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    lastScroll = currentScroll;
});

// ============================================
// 2. MOBILE MENU
// ============================================
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ============================================
// 3. SMOOTH SCROLL FOR NAV LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// 4. SOCIAL LINKS - Open in new tab
// ============================================
// GitHub Links
document.querySelectorAll('#githubLink, #githubContact, #githubFooter').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://github.com/ankitmahato54', '_blank');
    });
});

// LinkedIn Links
document.querySelectorAll('#linkedinLink, #linkedinContact, #linkedinFooter').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        window.open('https://www.linkedin.com/in/ankitmahato1/', '_blank');
    });
});

// Email Links
document.querySelectorAll('#emailLink, #emailContact, #emailFooter').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = 'mailto:ankitmahato54@gmail.com';
    });
});

// Terminal Link
document.getElementById('terminalLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('terminalWidgetContainer').scrollIntoView({
        behavior: 'smooth'
    });
});

// ============================================
// 6. CONTACT FORM - Formspree Integration
// ============================================
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Disable button to prevent multiple submissions
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        formStatus.innerHTML = '';
        
        try {
            const formData = new FormData(contactForm);
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });
            
            if (response.ok) {
                formStatus.innerHTML = `
                    <div class="form-success">
                        ✅ Thank you! Your message has been sent successfully.
                    </div>
                `;
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            formStatus.innerHTML = `
                <div class="form-error">
                    ❌ Something went wrong. Please try again or email me directly.
                </div>
            `;
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = `
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
            `;
        }
    });
}

// ============================================
// 7. TERMINAL TOGGLE
// ============================================
const toggleBtn = document.getElementById('toggleTerminalBtn');
const terminalContainer = document.getElementById('terminalWidgetContainer');
let terminalVisible = true;

if (toggleBtn && terminalContainer) {
    toggleBtn.addEventListener('click', () => {
        terminalVisible = !terminalVisible;
        terminalContainer.classList.toggle('hidden');
        if (terminalVisible) {
            setTimeout(() => {
                const input = document.getElementById('terminalInput');
                if (input) input.focus();
            }, 200);
        }
    });
}

