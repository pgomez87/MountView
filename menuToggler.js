const navLinks = document.getElementById('navLinks');

document.getElementById('show-menu').addEventListener('click', function(e) {

    navLinks.style.right = '0px'

    e.preventDefault()
});


document.getElementById('hide-menu').addEventListener('click', function(e) {

    navLinks.style.right = '-300px'
    navLinks.add

    e.preventDefault()
});