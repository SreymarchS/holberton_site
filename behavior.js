document.addEventListener("DOMContentLoaded", function (event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");
    thumbnailElement.addEventListener("click", function () {
        if (thumbnailElement.className == "") {
            thumbnailElement.className = "small";
        } else {
            thumbnailElement.className = "";
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        console.log('navlink')
        if (window.location.href.includes(link.href)) {
            link.classList.add('active');
        }
    });
});