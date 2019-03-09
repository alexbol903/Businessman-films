import sal from 'sal.js';
import jump from 'jump.js';

// Animate blocks 
sal({
	threshold: 0.5,
  once: true
});

// Smooth scroll
const btnSkills = document.querySelector('.btnSkills');
const btnPrice = document.querySelectorAll('.btnPrice');
const btnProjects = document.querySelectorAll('.btnProjects');
const btnContacts = document.querySelector('.btnContacts');

btnSkills.addEventListener('click', () => jump('#skills', { offset: 60 }));
btnProjects.forEach(el => el.addEventListener('click', () => jump('#projects', { offset: 60 })));
btnPrice.forEach(el => el.addEventListener('click', () => jump('#price', {offset: 60})));
btnContacts.addEventListener('click', () => jump('#contacts', { offset: 60 }));

