import animLP from './animLP';


// Animate blocks 
animLP({
  elements: [
    {
      class: 'logo',
      duration: 1200,
      delay: 300,
      animation: 'fadeLeft'
    },
    {
      class: [ 'primary-heading', 'first-screen__text' ],
      duration: 1000,
      delay: 500,
      animation: 'fade'
    },
    {
      class: [ 'btnProjects--left', 'address'],
      duration: 800,
      delay: 700,
      animation: 'fadeLeft'
    },
    {
      class: [ 'btnProjects--right', 'form__input--right', 'send-form--right', 'contact'],
      duration: 800,
      delay: 700,
      animation: 'fadeRight'
    },
    {
      class: [ 'secondary-heading', 'price__title'],
      duration: 900,
      delay: 100,
      animation: 'fade'
    },
    {
      class: 'skills__img-block',
      duration: 1000,
      delay: 300,
      animation: 'fadeDown'
    },
    {
      class: [ 'skills__title', 'dozor', 'expo', 'touch','aurora'],
      duration: 800,
      delay: 500,
      animation: 'fadeDown'
    },
    {
      class: [ 'skills__text', 'projects__title'],
      duration: 900,
      delay: 300,
      animation: 'fadeDown'
    },
    {
      class: [ 'tools__img', 'video', 'price__text'],
      duration: 800,
      delay: 100,
      animation: 'fadeUp'
    },
    {
      class: [ 'skills__btn', 'tertiary-heading', 'projects__price'],
      duration: 1200,
      delay: 600,
      animation: 'fade'
    },
    {
      class: [ 'tools__text', 'partners__text', 'street', 'magis', 'camrise', 'drumstarz', 'projects__text', 'open-request'],
      duration: 800,
      delay: 500,
      animation: 'fadeUp'
    },
  ],
  param: {
    startAnim: 100,
    once: true
  }
});

