/* // Variables for send post 
const rec = new XMLHttpRequest();

const forms = document.querySelectorAll('.lead');
const buttons = document.querySelectorAll('.send-form');

// Variable message for send to email
let message = '';

// Evetn button submit
buttons.forEach(element => {
  element.addEventListener('click', () => {
    let elementsArr = element.parentElement.querySelectorAll('input');
    elementsArr = Array.prototype.slice.call(elementsArr);

    message = `Привет тебе новое сообщение от ${elementsArr.name} его адрес электронной почты ${elementsArr.email} и навсякий случай его телефон ${elementsArr.phone}, все удачи!`;
  });
  // return;
});

try {
  rec.open('POST', 'bol-alexey@mail.ru', true);
  rec.setRequestHeader(
		'Content-Type',
		'application/x-www-form-urlencoded; charset=UTF-8'
	);
  rec.send(message);

} catch (error) {
  alert(error);
} */