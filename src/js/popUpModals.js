const elements = {
	// FOR OPEN CLOSE MODALS
	btnCallback: document.querySelector('.callback__btn'),
	btnRequest: document.querySelectorAll('.open-request'),
	modallCalback: document.getElementById('callbackModal'),
	modallRequest: document.getElementById('requestModal'),
	modallPopup: document.getElementById('popUpModal'),
	modallBackground: document.querySelectorAll('.modal-background'),
	modallClose: document.querySelectorAll('.modal__btn--close'),
	body: document.querySelector('body'),
	lastActiveElement: {},
	// FOR TABULATION IN MODAL
	tabIndex: modal => {
		let arr = modal.querySelectorAll(['input', 'button']);
		arr = Array.prototype.slice.call(arr);
		return arr;
	}
};

// Function toggle class of body for modal open or close
const toggleBody = () => {};

// Function to open modal
const openModal = modal => {
	if (modal.classList.contains('out')) {
		modal.classList.replace('out', 'one');
	} else {
		modal.classList.add('one');
	}

	elements.body.classList.add('modal-active');
};

const closeModal = modal => {
	if (modal.classList.contains('one')) modal.classList.replace('one', 'out');

	elements.body.classList.remove('modal-active');
	elements.lastActiveElement.focus();
};

// Open callback modal
elements.btnCallback.addEventListener('click', el => {
	elements.lastActiveElement = document.activeElement;
	openModal(elements.modallCalback);
	el.preventDefault();
	tabElements(elements.modallCalback);
});

// Open request modal
elements.btnRequest.forEach(element => {
	element.addEventListener('click', el => {
		elements.lastActiveElement = document.activeElement;
		openModal(elements.modallRequest);
		el.preventDefault();
		tabElements(elements.modallRequest);
	});
});

// Open popup modal



// Function Tabulation in form
const tabElements = modal => {
	const tabIndex = elements.tabIndex(modal);
	const closeBtn = tabIndex[0];
	const lastElem = tabIndex[tabIndex.length - 1];
  
	// Focus input name
	tabIndex[1].focus();
  
	modal.addEventListener('keydown', key => {
    if (key.keyCode === 9) {
			if (key.shiftKey) {
				// Shift + Tab press key
				if (document.activeElement === closeBtn) {
					key.preventDefault();
					lastElem.focus();
				}
			} else {
        // Tab press key
				if (document.activeElement === lastElem) {
          key.preventDefault();
					closeBtn.focus();
				}
			}
		}

		//Close modal on Esc press key
		if (key.keyCode === 27) closeModal(modal);
	});
  
	// Close modals click on buttonClose
	elements.modallClose.forEach(element => {
    element.addEventListener('click', () => {
      closeModal(modal);
		});
	});
  
  // Close modals click on background
  elements.modallBackground.forEach(element => {
    element.addEventListener('click', event => {
      if (event.target === element) {
        if (element.parentElement === modal) {
          closeModal(modal);
        } 
      }
    });
  });
};
