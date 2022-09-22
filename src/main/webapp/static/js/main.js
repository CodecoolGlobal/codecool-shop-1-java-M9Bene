const HomeButton = document.querySelector('.logo-text');
const ModalForCategory = document.querySelector('.modalForCategory');
const categoryMenuButton = document.querySelector('.categoryMenuButton');
const headerMenu = document.querySelector('.header-menu');
const supplierMenuButton = document.querySelector('.supplierMenuButton');
const modalForSupplier = document.querySelector('.modalForSupplier');
const addToCartButtons = document.querySelectorAll('.buttonAddToCart');

HomeButton.addEventListener("click", HomePageLoad);
categoryMenuButton.addEventListener('mouseover', ModalDisplayForCategory);
supplierMenuButton.addEventListener('mouseover', ModalDisplayForSupplier)


function HomePageLoad() {
    window.location.href = '/';
}

function HideModal(modalWithListener, modalToHide) {
    modalWithListener.addEventListener('mouseleave', (event) => {
        modalToHide.classList.add('modalDisplayHidden');
    });
}

function ModalDisplayForCategory() {
    ModalForCategory.classList.remove('modalDisplayHidden');
    modalForSupplier.classList.add('modalDisplayHidden');
    HideModal(ModalForCategory, ModalForCategory);
    HideModal(headerMenu, ModalForCategory);
}

function ModalDisplayForSupplier() {
    modalForSupplier.classList.remove('modalDisplayHidden');
    ModalForCategory.classList.add('modalDisplayHidden');
    HideModal(modalForSupplier, modalForSupplier);
    HideModal(headerMenu, modalForSupplier);
}

addToCartButtons.forEach((addButton) => addButton.addEventListener('click', (event) => {
    const url = `/shopping-cart?id=${event.target.dataset.productId}`;
    fetchProduct(url);
    }));


async function fetchProduct(url) {
    const response = await fetch(url);
    return response.json();
}

