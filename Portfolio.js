// Main Javascript
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

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

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};





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
                backgroundColor: 'white', // Bar colors
                borderColor: 'white',
                borderWidth: 2,
            },
            {
                label: 'Improvement (%)',
                data: [70, 75, 67, 69],
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
                    color: 'white', // Legend label color
                },
            },
        },
        scales: {
            x: {
                ticks: {
                    color: 'white', // X-axis label color
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)', // X-axis gridline color
                },
            },
            y: {
                ticks: {
                    color: 'white', // Y-axis label color
                },
                grid: {
                    color: 'rgba(255, 255, 255, 0.2)', // Y-axis gridline color
                },
            },
        },
    },
});
