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

            // Form Submission 
 

    const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn = contactForm.querySelector('button[type="submit"]');
        const originalText = btn.innerText;

        btn.innerText = 'Sending...';
        btn.disabled = true;
        formMessage.innerHTML = '';

        const formData = new FormData(contactForm);

        try {
            const response = await fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                formMessage.innerHTML = '<span class="success-msg">Thank you! Your message has been sent successfully</span>';
                contactForm.reset();

                setTimeout(() => {
                formMessage.innerHTML = '';
                closeModal();
                }, 2000);
            } else {
                formMessage.innerHTML = '<span class="error-msg">Something went wrong. Try again.</span>';
            }

        } catch (error) {
            formMessage.innerHTML = '<span class="error-msg">Network error. Try again.</span>';
        }

        btn.innerText = originalText;
        btn.disabled = false;
    });
}

});
