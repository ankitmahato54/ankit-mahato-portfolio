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
// 6. CONTACT FORM
// ============================================
document.getElementById('contactForm')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.querySelector('input[type="text"]')?.value || '';
    const email = form.querySelector('input[type="email"]')?.value || '';
    const message = form.querySelector('textarea')?.value || '';

    if (name && email && message) {
        // Simple validation
        if (!email.includes('@')) {
            alert('Please enter a valid email address.');
            return;
        }

        // Open mail with pre-filled content
        const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
        window.location.href = `mailto:ankitmahato54@gmail.com?subject=${subject}&body=${body}`;
        
        // Clear form
        form.reset();
        alert('Thank you for your message! I will get back to you soon.');
    } else {
        alert('Please fill in all fields.');
    }
});

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

