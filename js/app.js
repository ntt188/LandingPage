let timeout; //param time hide scroll

/**
 * @description Create navbar
 */
function createNavbar() {
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navBar = document.createElement('nav');
    const navList = document.createElement('ul');

    sections.forEach((section, index) => {
        const navItem = document.createElement('li');
        const navLink = document.createElement('a');

        navLink.href = `#${section.id}`;
        navLink.textContent = `Section ${index + 1}`;
        navLink.classList.add('nav-link');

        navItem.appendChild(navLink);
        navList.appendChild(navItem);
    });

    navBar.classList.add('wide');
    navBar.appendChild(navList);

    header.appendChild(navBar);
}

/**
 * @description Activate Section and navlink On Scroll
 */
function activeSectionAndNavLinkOnScroll() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function checkSection() {
        sections.forEach((section) => {
            const locate = section.getBoundingClientRect();

            if(locate.top >= 0 && locate.top <= window.innerHeight/2) {
                sections.forEach((sec) => sec.classList.remove('active'));
                //Active section
                section.classList.add('active');

                //Active link
                navLinks.forEach((link) => {
                    link.classList.remove('active');
                    if(link.getAttribute('href') === `#${section.id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    checkSection();
    window.addEventListener('scroll', checkSection);
}

/**
 * @description Add navbar button on mobile screen
 */
function addButtonNavBar() {
    const header = document.querySelector('header');
    const nav = document.querySelector('nav');

    if (window.innerWidth <= 739) {
        const btnNav = document.createElement('label');
        btnNav.classList.add('nav-btn');

        const icon = document.createElement('i');
        icon.classList.add('fa', 'fa-bars', 'fa-3x');
        icon.setAttribute('aria-hidden', 'true');

        btnNav.appendChild(icon);

        header.appendChild(btnNav);

        btnNav.addEventListener('click', function() {
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
            nav.classList.toggle('open');
        });
    }
}

/**
 * @description add class 'scrollbar' to body to show scrollbar
 */
function showScrollbar() {
    document.body.classList.add('scrollbar');
}

/**
 * @description remove class 'scrollbar' to body to hide scrollbar
 */
function hideScrollbar() {
    document.body.classList.remove('scrollbar');
}

/**
 * @description function to set timeout when user operates
 */
function handleUserActivity() {
    clearTimeout(timeout);
    showScrollbar();
    timeout = setTimeout(hideScrollbar, 1500);
}

/**
 * @description Show Hide Scroll
 */
function hideShowScrollbar() {
    window.addEventListener('scroll', handleUserActivity);
    hideScrollbar();
}

document.addEventListener('DOMContentLoaded', function() {
    createNavbar();
    activeSectionAndNavLinkOnScroll();
    addButtonNavBar();
    hideShowScrollbar();
});

/**
 * @description Remove or Add navbar button when resize
 */
window.addEventListener('resize', function(){
    const btnNav = document.querySelector('.nav-btn');
    if (btnNav && this.window.innerWidth > 739) {
        btnNav.remove();
    } else if (!btnNav && this.window.innerWidth <= 739) {
        addButtonNavBar();
    }
});