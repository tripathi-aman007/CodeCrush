// Add "active" class to the current page's navbar item
document.addEventListener("DOMContentLoaded", function() {
    var url = window.location.pathname;
    var activePage = url.substring(url.lastIndexOf('/') + 1);
    if (activePage === "") {
        activePage = "home";
    }
    var navItems = document.querySelectorAll('.navbar-nav .nav-item');
    navItems.forEach(function(item) {
        if (item.querySelector('a').getAttribute('href').indexOf(activePage) !== -1) {
            item.classList.add('active');
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('blue-background');
        });
        input.addEventListener('blur', function() {
            this.classList.remove('blue-background');
        });
    });
});
