'use strict';

function createNav() {
    var previous = '';
    var current = 'HOME';

    changePage();
    changeNavItem();

    document
        .querySelectorAll('.nav-item')
        .forEach(function (element) {

            element.addEventListener('click', function (e) {
                e.preventDefault();
                const to = e.target.getAttribute('href');
                push(to);
            })
        });

    document.querySelector('.home__textBox').addEventListener('click', function (e) {
        e.preventDefault();
        const to = e.target.closest('a').getAttribute('href');
        console.log(to);
        push(to);
    })

    function push(to) {
        previous = current;
        current = to;

        changePage();
        changeNavItem();
    }

    function changePage() {
        var className = 'page--active';

        if (previous) {
            var previousPage = document.querySelector('#' + previous);
            previousPage.classList.remove(className);
        }

        var page = document.querySelector('#' + current);
        page.classList.add(className);
    }

    function changeNavItem() {
        var className = 'active';

        if (previous) {
            var previousNavItem = document.querySelector('[href="' + previous + '"]');
            previousNavItem.classList.remove(className);
        }

        var navItem = document.querySelector('[href="' + current + '"]');
        navItem.classList.add(className);
    }
}

function main() {
    createNav();
}

main();