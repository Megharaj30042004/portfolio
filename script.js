document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Typewriter Effect Logic ---
    const texts = [
        "Frontend Developer",
        "Full Stack Developer",
        "Problem Solver"
    ];
    let count = 0;
    let index = 0;
    let currentText = "";
    let letter = "";
    let isDeleting = false;
    
    const typeElement = document.getElementById("typewriter");

    function type() {
        if (count === texts.length) {
            count = 0; 
        }
        currentText = texts[count];

        if (isDeleting) {
            letter = currentText.slice(0, --index);
        } else {
            letter = currentText.slice(0, ++index);
        }

        typeElement.textContent = letter;

        let typeSpeed = isDeleting ? 50 : 100;

        if (!isDeleting && letter.length === currentText.length) {
            typeSpeed = 2000; 
            isDeleting = true;
        } else if (isDeleting && letter.length === 0) {
            isDeleting = false;
            count++;
            typeSpeed = 500; 
        }

        setTimeout(type, typeSpeed);
    }

    setTimeout(type, 1000);

    // --- 2. Scroll Reveal Animations ---
    const reveals = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15, 
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // --- 3. Smooth Scrolling & Active State for Floating Nav ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Smooth scrolling
    navLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if(targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if(targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// --- 4. Web3Forms Background Submission Logic ---
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');

if (form) {
    form.addEventListener('submit', function(e) {
        // Prevent the default form submission (stops the page from redirecting!)
        e.preventDefault();

        // Grab all the data the user typed in
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        // Send the data to Web3Forms in the background
        fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: json
        })
        .then(async (response) => {
            if (response.status == 200) {
                // If successful, hide the form and show your custom message!
                form.classList.add('opacity-0', 'pointer-events-none');
                setTimeout(() => {
                    form.classList.add('hidden');
                    successMessage.classList.remove('hidden');
                    successMessage.classList.add('fade-in-up');
                }, 300);
            } else {
                console.log("Error sending message.");
            }
        })
        .catch(error => {
            console.log(error);
        });
    });
}