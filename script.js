// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect when scrolling
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    observer.observe(section);
});

// Skill Bars Animation
const skillSection = document.getElementById('skills');
const skillObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelectorAll('.bar span').forEach(bar => {
                bar.style.animation = 'growBar 2s forwards';
            });
        }
    });
}, {
    threshold: 0.5
});

skillObserver.observe(skillSection);

// Handle Form Submission and Save Data to JSON
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Simulate saving to JSON file (you would typically send this data to a server)
    console.log('Form Data:', JSON.stringify(formData));

    // Clear form after submission
    this.reset();

    alert('Thank you for contacting me!');
});

// Music Button
const musicButton = document.createElement('div');
musicButton.className = 'music-button';
musicButton.innerText = '♪';
document.body.appendChild(musicButton);

const audio = new Audio('path_to_your_audio_file.mp3');
musicButton.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// Responsive Scroll Animation
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrolled >= sectionTop - window.innerHeight / 1.5) {
            section.classList.add('fade-in');
        }
    });
});
