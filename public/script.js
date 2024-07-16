// Function to add appointment to calendar
document.getElementById('calendarForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const event = document.getElementById('event').value;
    const date = document.getElementById('event-date').value;

    if (event && date) {
        alert(`Added "${event}" to your calendar for ${date}.`);
        // You can implement further logic here, like sending data to a calendar API
    } else {
        alert('Please fill out all fields.');
    }
});

// Smooth scrolling for navbar links
document.querySelectorAll('.nav-links a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const sectionId = this.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        window.scrollTo({
            top: section.offsetTop - document.querySelector('.navbar').offsetHeight,
            behavior: 'smooth'
        });
    });
});

// Update navbar style on scroll
document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('navbar-scroll');
    } else {
        navbar.classList.remove('navbar-scroll');
    }
});

