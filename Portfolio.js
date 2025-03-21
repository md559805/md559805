// Main Javascript
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

// Ensure the navbar is closed by default
document.addEventListener('DOMContentLoaded', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
});

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove('active');

                let currentLink = document.querySelector('header nav a[href*=' + id + ']');
                if (currentLink) {
                    currentLink.classList.add('active');
                }
            });
        }
    });
};

// Toggle navbar visibility
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Toggle Button
const toggleButton = document.getElementById('light-mode-toggle');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

// Chart.js Configuration
const ctx = document.getElementById('progressChart').getContext('2d');
const progressChart = new Chart(ctx, {
    type: 'bar', // Bar chart type
    data: {
        labels: ['January', 'February', 'March', 'April'], // Months
        datasets: [
            {
                label: 'Hours Practiced',
                data: [49, 52, 42, 46],
                backgroundColor: '#d0d0d0add', // Bar colors
                borderColor: '#d0d0d0',
                borderWidth: 2,
            },
            {
                label: 'Improvement (%)',
                data: [70, 50, 67, 69],
                backgroundColor: '#ff0000',
                borderColor: '#ff0000',
                borderWidth: 2,
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#d0d0d0', // Legend label color
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: '#d0d0d0', // X-axis label color
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0)', // X-axis gridline color
                },
            },
            y: {
                ticks: {
                    color: '#d0d0d0', // Y-axis label color
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0)', // Y-axis gridline color
                },
            },
        },
    },
});

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
        {
            pageLanguage: 'en', 
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 
        'google_translate_element'
    );
}

// Back to Top Button
const backToTopButton = document.getElementById('back-to-top');

// Show or hide the button based on scroll position
window.onscroll = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
backToTopButton.onclick = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};

