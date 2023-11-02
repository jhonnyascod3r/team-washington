document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(function (button) {
        button.addEventListener('mouseout', function () {
            const subMenu = button.querySelector('.sub-menu');
            subMenu.style.maxHeight = '0';
        });

        button.addEventListener('mouseover', function () {
            const subMenu = button.querySelector('.sub-menu');
            subMenu.style.maxHeight = '500px'; /* Defina o mesmo valor que no CSS */
        });
    });
});
