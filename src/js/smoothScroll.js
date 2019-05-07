import jump from 'jump.js';

// Smooth scroll
const btnSkills = document.querySelector('.btnSkills');
const btnPrice = document.querySelectorAll('.btnPrice');
const btnProjects = document.querySelectorAll('.btnProjects');
const btnContacts = document.querySelector('.btnContacts');

btnSkills.addEventListener('click', () => jump('#skills'));
btnProjects.forEach(el => el.addEventListener('click', () => { jump('#projects') }));
btnPrice.forEach(el => el.addEventListener('click', () => {jump('#price')}));
btnContacts.addEventListener('click', () => {jump('#contacts')});

// Button Up
const btnUp = document.querySelector('#scrollUp');
const scrollButton = () => {
  let height = document.documentElement.clientHeight; 
  let screenOfSet = window.pageYOffset;
  if (screenOfSet > height) {
    btnUp.classList.add('scroll-up--active');
  } else {
    btnUp.classList.remove('scroll-up--active');
  }
};

btnUp.addEventListener('click', () => jump('#header', {
  callback: () => {
    btnSkills.focus();
  }
}));

[ 'scroll', 'load' ].forEach(event => window.addEventListener(event, scrollButton));
 
