document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }

    // Contact Modal Logic
    const contactModal = document.getElementById('contactModal');
    const closeBtn = document.getElementById('closeModal');
    const contactTriggers = document.querySelectorAll('.contact-trigger');

    function openModal(e) {
        e.preventDefault();
        contactModal.classList.add('show');
    }

    function closeModal() {
        contactModal.classList.remove('show');
    }

    contactTriggers.forEach(trigger => {
        trigger.addEventListener('click', openModal);
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    if (contactModal) {
        contactModal.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                closeModal();
            }
        });
    }

    // Form Submission Simulation
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            btn.innerText = 'Sending...';
            btn.disabled = true;
            formMessage.innerHTML = '';

            // Simulate network request
            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
                
                // Form validation is handled by HTML5 'required' attributes mostly,
                // but we simulate a successful submission here.
                formMessage.innerHTML = '<span class="success-msg">Thank you! Your message has been sent successfully.</span>';
                contactForm.reset();
                
                // Hide message after a few seconds
                setTimeout(() => {
                    formMessage.innerHTML = '';
                    closeModal();
                }, 3000);
            }, 1500);
        });
    }
});
