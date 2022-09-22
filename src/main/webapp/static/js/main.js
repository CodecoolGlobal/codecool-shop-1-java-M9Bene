const HomeButton = document.querySelector('.logo-text');
const ModalForCategory = document.querySelector('.modalForCategory');
const categoryMenuButton = document.querySelector('.categoryMenuButton');
const headerMenu = document.querySelector('.header-menu');
const supplierMenuButton = document.querySelector('.supplierMenuButton');
const modalForSupplier = document.querySelector('.modalForSupplier');
const addToCartButtons = document.querySelectorAll('.buttonAddToCart');
const removeFromCartButtons = document.querySelectorAll('.buttonRemove');
const plusQuantityButtons = document.querySelectorAll('.plus-button');
const minusQuantityButtons = document.querySelectorAll('.minus-button');
const loadButtonForCartPage = document.querySelector('#load-cart-page');
const loadLoginRegisterIcon = document.querySelector('#load-login-register-icon');
const modalForLoginRegister = document.querySelector('.modalForLoginRegister');
const loginButton = document.querySelector('.loginButton');
const modalForLogin = document.querySelector('.modalForLogin');
const container = document.querySelector('.container');
const modalForRegister = document.querySelector('.modalForRegister');
const registerButton = document.querySelector('.registerButton');

HomeButton.addEventListener("click", HomePageLoad);
categoryMenuButton.addEventListener('mouseover', ModalDisplayForCategory);
supplierMenuButton.addEventListener('mouseover', ModalDisplayForSupplier);
loadButtonForCartPage.addEventListener('click', addLoadForCartPage)
loadLoginRegisterIcon.addEventListener('mouseover', ModalDisplayForLoginRegister);
loginButton.addEventListener('click', ModalDisplayForLogin);
registerButton.addEventListener('click', ModalDisplayForRegister);


function HomePageLoad() {
    window.location.href = '/';
}

function HideModal(modalWithListener, modalToHide) {
    modalWithListener.addEventListener('mouseleave', (event) => {
        modalToHide.classList.add('modalDisplayHidden');
    });
}
function HideModalWithClick(modalWithListener, modalToHide) {
    modalWithListener.addEventListener('click', (event) => {
        modalToHide.classList.add('modalDisplayHidden');
    });
}

function ModalDisplayForCategory() {
    ModalForCategory.classList.remove('modalDisplayHidden');
    modalForSupplier.classList.add('modalDisplayHidden');
    modalForLoginRegister.classList.add('modalDisplayHidden');
    HideModal(ModalForCategory, ModalForCategory);
    HideModal(headerMenu, ModalForCategory);
}

function ModalDisplayForSupplier() {
    modalForSupplier.classList.remove('modalDisplayHidden');
    ModalForCategory.classList.add('modalDisplayHidden');
    modalForLoginRegister.classList.add('modalDisplayHidden');
    HideModal(modalForSupplier, modalForSupplier);
    HideModal(headerMenu, modalForSupplier);
}

function ModalDisplayForLoginRegister() {
    modalForLoginRegister.classList.remove('modalDisplayHidden');
    ModalForCategory.classList.add('modalDisplayHidden');
    modalForSupplier.classList.add('modalDisplayHidden');
    HideModal(modalForLoginRegister, modalForLoginRegister);
    HideModal(headerMenu, modalForLoginRegister);
}


function ModalDisplayForLogin() {
    modalForLogin.classList.remove('modalDisplayHidden');
    modalForLoginRegister.classList.add('modalDisplayHidden');
    HideModalWithClick(container, modalForLogin);
}
function ModalDisplayForRegister() {
    modalForRegister.classList.remove('modalDisplayHidden');
    modalForLoginRegister.classList.add('modalDisplayHidden');
    HideModalWithClick(container, modalForRegister);
}


function addLoadForCartPage() {
    window.location.href = '/shopping-cart';
}

addToCartButtons.forEach((addButton) => addButton.addEventListener('click', (event) => {
        const url = `/shopping-cart?id=${event.target.dataset.productId}`;
        fetchProduct(url);
    })
)

removeFromCartButtons.forEach((removeButton) => removeButton.addEventListener('click',  (event) => {
        const url = `/shopping-cart-remove?id=${event.target.dataset.productId}`;
        fetchProduct(url);
        location.reload();
    })
)

plusQuantityButtons.forEach((plusButton) => plusButton.addEventListener('click',
    (event) => {
        const url = `/shopping-cart?plus=${event.target.dataset.productId}`;
        fetchProduct(url);
        location.reload();
    })
)


minusQuantityButtons.forEach((minusButton) => minusButton.addEventListener('click',  (event) => {
        const url = `/shopping-cart?minus=${event.target.dataset.productId}`;
        fetchProduct(url);
        location.reload();
    })
)



async function fetchProduct(url) {
    const response = await fetch(url);
    return response.json();
}

