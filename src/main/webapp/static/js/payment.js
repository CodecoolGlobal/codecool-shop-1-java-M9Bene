const paymentInformation = document.querySelector('.payment-information');
const paymentSelectors = document.querySelectorAll('.payment-selector');

paymentSelectors.forEach((paymentButton) =>
    paymentButton.addEventListener('click', () => {
        if (paymentButton.id === 'credit-card') {
            paymentInformation.innerHTML = '';
            payWithCard();
            const payButton = document.querySelector('#payWithCardButton');
        } else {
            paymentInformation.innerHTML = '';
            payWithPayPal();
            const payButton = document.querySelector('#payWithPayPalButton');
        }
    })
);


function payWithCard() {
    const creditCardInfoContainer = document.createElement('form');
    creditCardInfoContainer.classList.add('payment-data-form');
    creditCardInfoContainer.method = 'post';
    paymentInformation.appendChild(creditCardInfoContainer);

    const cardInfoGroup = document.createElement('div');
    cardInfoGroup.classList.add('form-group');
    creditCardInfoContainer.appendChild(cardInfoGroup);

    const cardNumberLabel = document.createElement('label');
    cardNumberLabel.classList.add('payment-form-label');
    cardNumberLabel.setAttribute('for', 'card-number-field');
    cardNumberLabel.textContent = 'Card number';

    const cardNumberField = document.createElement('input');
    cardNumberField.type = 'text';
    cardNumberField.id = 'card-number-field';
    cardNumberField.placeholder = 'Card number';

    const cardHolderLabel = document.createElement('label');
    cardHolderLabel.classList.add('payment-form-label');
    cardHolderLabel.setAttribute('for', 'card-holder-field');
    cardHolderLabel.textContent = "Card holder's name";

    const cardHolderField = document.createElement('input');
    cardHolderField.type = 'text';
    cardHolderField.id = 'card-holder-field';
    cardHolderField.placeholder = "Card holder's name";

    const cardExpiryLabel = document.createElement('label');
    cardExpiryLabel.classList.add('payment-form-label');
    cardExpiryLabel.setAttribute('for', 'card-expiry-field');
    cardExpiryLabel.textContent = 'Expiry date';

    const cardExpiryField = document.createElement('input');
    cardExpiryField.type = 'text';
    cardExpiryField.id = 'card-expiry-field';
    cardExpiryField.placeholder = 'Expiry date';

    const cardCvvLabel = document.createElement('label');
    cardCvvLabel.classList.add('payment-form-label');
    cardCvvLabel.setAttribute('for', 'card-cvv-field');
    cardCvvLabel.textContent = 'CVV number';

    const cardCvvField = document.createElement('input');
    cardCvvField.type = 'text';
    cardCvvField.id = 'card-cvv-field';
    cardCvvField.placeholder = 'CVV number';

    cardInfoGroup.append(cardNumberLabel, cardNumberField, cardHolderLabel, cardHolderField, cardExpiryLabel, cardExpiryField, cardCvvLabel, cardCvvField);

    createModal();

    const payButton = document.createElement('button');
    payButton.type = 'button';
    payButton.classList.add('btn');
    payButton.classList.add('btn-success');
    payButton.id = 'payWithCardButton';
    payButton.setAttribute('data-bs-toggle', 'modal');
    payButton.setAttribute('data-bs-target', '#errorModal');
    payButton.textContent = 'Pay';
    paymentInformation.appendChild(payButton);
}


function payWithPayPal() {
    const payPalInfoContainer = document.createElement('form');
    payPalInfoContainer.classList.add('payment-data-form');
    payPalInfoContainer.method = 'post';
    paymentInformation.appendChild(payPalInfoContainer);

    const payPalInfoGroup = document.createElement('div');
    payPalInfoGroup.classList.add('form-group');
    payPalInfoContainer.appendChild(payPalInfoGroup);

    const payPalUserNameLabel = document.createElement('label');
    payPalUserNameLabel.classList.add('payment-form-label');
    payPalUserNameLabel.setAttribute('for', 'username-field');
    payPalUserNameLabel.textContent = 'Username';

    const payPalUserNameField = document.createElement('input');
    payPalUserNameField.type = 'text';
    payPalUserNameField.id = 'username-field';
    payPalUserNameField.placeholder = 'Username';

    const payPalPasswordLabel = document.createElement('label');
    payPalPasswordLabel.classList.add('payment-form-label');
    payPalPasswordLabel.setAttribute('for', 'password-field');
    payPalPasswordLabel.textContent = "Password";

    const payPalPasswordField = document.createElement('input');
    payPalPasswordField.type = 'text';
    payPalPasswordField.id = 'password-field';
    payPalPasswordField.placeholder = "Password";

    payPalInfoGroup.append(payPalUserNameLabel, payPalUserNameField, payPalPasswordLabel, payPalPasswordField);

    createModal();

    const payButton = document.createElement('button');
    payButton.type = 'submit';
    payButton.classList.add('btn');
    payButton.classList.add('btn-success');
    payButton.id = 'payWithPayPalButton';
    payButton.setAttribute('data-bs-toggle', 'modal');
    payButton.setAttribute('data-bs-target', '#errorModal');
    payButton.textContent = 'Pay';
    paymentInformation.appendChild(payButton);
}


function createModal() {
    const modal = document.createElement('div');
    modal.id = 'errorModal';
    modal.classList.add('modal');
    modal.classList.add('fade');
    modal.setAttribute('tabindex', '-1');
    modal.setAttribute('aria-labelledby', 'errorModalLabel');
    modal.setAttribute('aria-hidden', 'true');
    document.querySelector('body').appendChild(modal);
    const modalDialog = document.createElement('div');
    modalDialog.classList.add('modal-dialog');
    modalDialog.classList.add('modal-xl');
    modal.appendChild(modalDialog);
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    modalDialog.appendChild(modalContent);
    const modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');
    modalContent.appendChild(modalHeader);
    const modalTitle = document.createElement('h5');
    modalTitle.classList.add('modal-title');
    modalTitle.id = 'errorModalLabel';
    modalHeader.appendChild(modalTitle);
    const modalCloseButton = document.createElement('button');
    modalCloseButton.type = 'button';
    modalCloseButton.classList.add('btn-close');
    modalCloseButton.setAttribute('data-bs-dismiss', 'modal');
    modalCloseButton.setAttribute('aria-label', 'Close');
    modalHeader.appendChild(modalCloseButton);
    const modalBody = document.createElement('div');
    modalBody.classList.add('modal-body');
    modalContent.appendChild(modalBody);
    const message = document.createElement('h4');
    message.textContent = "You do not have enough balance on your account."
    modalBody.appendChild(message);
    const modalFooter = document.createElement('div');
    modalFooter.classList.add('modal-footer');
    modalContent.appendChild(modalFooter);
    const modalDismissButton = document.createElement('button');
    modalDismissButton.type = 'button';
    modalDismissButton.classList.add('btn');
    modalDismissButton.classList.add('btn-primary');
    modalDismissButton.setAttribute('data-bs-dismiss', 'modal');
    modalDismissButton.textContent = 'Close';
    modalFooter.appendChild(modalDismissButton);
    return modal;
}