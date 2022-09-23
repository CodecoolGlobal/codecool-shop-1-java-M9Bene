const sameAsBillingCheckBox = document.querySelector('#same-as-billing');


sameAsBillingCheckBox.addEventListener('click', () => {
    const billingCountry = document.querySelector('#billing-country').value;
    const billingCity = document.querySelector('#billing-city').value;
    const billingZip = document.querySelector('#billing-zip-code').value;
    const billingAddress = document.querySelector('#billing-address').value;

    let shippingCountry = document.querySelector('#shipping-country');
    let shippingCity = document.querySelector('#shipping-city');
    let shippingZip = document.querySelector('#shipping-zip-code');
    let shippingAddress = document.querySelector('#shipping-address');

    if (sameAsBillingCheckBox.checked) {
        shippingCountry.value = billingCountry;
        shippingCity.value = billingCity;
        shippingZip.value = billingZip;
        shippingAddress.value = billingAddress;
    }
});