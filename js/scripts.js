document.addEventListener('load', () => {
    if (document.dir === 'rtl') {
        document.body.style.fontFamily = 'Cairo, sans-serif';
    } else {
        document.body.style.fontFamily = 'Quicksand, sans-serif';
    }
})



const counterSection = document.querySelector('.plans');
const counterElements = document.querySelectorAll('#conuer[data-target]');

let isCounting = false;

function startCounting() {
    if (!isCounting && isElementInViewport(counterSection)) {
        isCounting = true;
        counterElements.forEach((element) => {
            const targetNumber = parseFloat(element.getAttribute('data-target'));
            const increment = targetNumber / 100; // You can adjust the increment as needed
            let currentNumber = 0;

            function updateCounter() {
                if (currentNumber < targetNumber) {
                    currentNumber += increment;
                    element.textContent = currentNumber.toFixed(1); // Display one decimal place
                    requestAnimationFrame(updateCounter);
                } else {
                    isCounting = false;
                }
            }

            updateCounter();
        });
        // Remove the scroll event listener to stop counting after reaching the target values
        window.removeEventListener('scroll', startCounting);
    }
}

function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

window.addEventListener('scroll', startCounting);