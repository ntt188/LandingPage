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

document.addEventListener('DOMContentLoaded', function() {
    createNavbar();
    activeSectionAndNavLinkOnScroll();
});