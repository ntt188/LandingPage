document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    function activateLink() {
        let index = sections.length;
    
        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}
        
        navLinks.forEach((link) => link.classList.remove('active'));
        navLinks[index].classList.add('active');
    }
    
    activateLink(); // Kích hoạt nút khi tải trang
    window.addEventListener('scroll', activateLink);
});