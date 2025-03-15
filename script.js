window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in');
    const scrollTop = window.pageYOffset + window.innerHeight;
    
    elements.forEach(function(element) {
        if (element.offsetTop < scrollTop) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 60, 
            behavior: 'smooth'
        });
    });
});
const projectLinks = document.querySelectorAll('.project-link');
projectLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        link.style.transform = 'scale(1.1)';
        link.style.transition = 'transform 0.3s ease';
    });

    link.addEventListener('mouseleave', function() {
        link.style.transform = 'scale(1)';
        link.style.transition = 'transform 0.3s ease';
    });
});

const inputs = document.querySelectorAll('#contact-form input, #contact-form textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function() {
        input.style.boxShadow = '0 0 10px rgba(247, 183, 49, 0.7)';
        input.style.backgroundColor = '#ffffff';
    });

    input.addEventListener('blur', function() {
        input.style.boxShadow = '';
        input.style.backgroundColor = '';
    });
});
const buttons = document.querySelectorAll('.btn, #contact-form button');
buttons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        button.style.transform = 'scale(1.1)';
    });

    button.addEventListener('mouseleave', function() {
        button.style.transform = 'scale(1)';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(element => {
        element.classList.add('visible');
    });
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for reaching out!');
    document.getElementById('contact-form').reset(); 
});
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.fade-in, .slide-up');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top <= window.innerHeight * 0.8) {
            element.classList.add('visible');
        }
    });
});
