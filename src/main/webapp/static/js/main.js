const HomeButton = document.querySelector('.logo-text');
const ModalForCategory = document.querySelector('.modalForCategory');
const categoryMenuButton = document.querySelector('.categoryMenuButton');
const headerMenu = document.querySelector('.header-menu');
const supplierMenuButton = document.querySelector('.supplierMenuButton');
const modalForSupplier = document.querySelector('.modalForSupplier');
const addToCartButtons = document.querySelectorAll('.buttonAddToCart');
const removeFromCartButtons = document.querySelectorAll('.buttonRemove');

const loadButtonForCartPage = document.querySelector('#load-cart-page');

HomeButton.addEventListener("click", HomePageLoad);
categoryMenuButton.addEventListener('mouseover', ModalDisplayForCategory);
supplierMenuButton.addEventListener('mouseover', ModalDisplayForSupplier)



loadButtonForCartPage.addEventListener('click', addLoadForCartPage)


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


async function fetchProduct(url) {
    const response = await fetch(url);
    return response.json();
}

