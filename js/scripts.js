document.addEventListener('load', () => {
    if (document.dir === 'rtl') {
        document.body.style.fontFamily = 'Cairo, sans-serif';
    } else {
        document.body.style.fontFamily = 'Quicksand, sans-serif';
    }
})