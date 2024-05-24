document.addEventListener('DOMContentLoaded', () => {
    const priceInput = document.getElementById('price-input');
    const messageContainer = document.getElementById('message-container');

    priceInput.addEventListener('focus', () => {
        priceInput.classList.add('green-border');
    });

    priceInput.addEventListener('blur', () => {
        priceInput.classList.remove('green-border');
        validatePrice();
    });

    function validatePrice() {
        const priceValue = parseFloat(priceInput.value);
        messageContainer.innerHTML = '';

        if (isNaN(priceValue) || priceValue < 0) {
            priceInput.classList.add('red-border');
            const errorMessage = document.createElement('div');
            errorMessage.className = 'error-message';
            errorMessage.textContent = 'Please enter correct price';
            messageContainer.appendChild(errorMessage);
        } else {
            priceInput.classList.remove('red-border');
            priceInput.classList.add('green-text');
            const priceMessage = document.createElement('span');
            priceMessage.textContent = `Текущая цена: ${priceValue}`;
            const closeButton = document.createElement('button');
            closeButton.textContent = 'X';
            closeButton.addEventListener('click', () => {
                messageContainer.innerHTML = '';
                priceInput.value = '';
                priceInput.classList.remove('green-text');
            });
            messageContainer.appendChild(priceMessage);
            messageContainer.appendChild(closeButton);
        }
    }
});