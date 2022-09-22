const paymentInformation = document.querySelector('.payment-information');
const paymentSelectors = document.querySelectorAll('.payment-selector');

paymentSelectors.forEach((paymentButton) =>
    paymentButton.addEventListener('click', () => {
        if (paymentButton.id === 'credit-card') {
            paymentInformation.innerHTML = '';
            payWithCard();
        } else {
            paymentInformation.innerHTML = '';
            payWithPayPal();
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

    const payButton = document.createElement('button');
    payButton.type = 'submit';
    payButton.classList.add('btn');
    payButton.classList.add('btn-success');
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

    const payButton = document.createElement('button');
    payButton.type = 'submit';
    payButton.classList.add('btn');
    payButton.classList.add('btn-success');
    payButton.textContent = 'Pay';
    paymentInformation.appendChild(payButton);
}