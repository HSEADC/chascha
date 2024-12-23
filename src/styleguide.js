document.addEventListener("DOMContentLoaded", function () {
    var navigation = document.querySelector(".navigation");
    var top = navigation.offsetTop;

    window.addEventListener("scroll", function () {
        if (window.scrollY >= top) {
            navigation.style.position = "fixed";
            navigation.style.top = "-33%"; 
            navigation.style.zIndex = "10"; 
        } else {
            navigation.style.position = ""; 
            navigation.style.top = ""; 
            navigation.style.zIndex = "";
        }
    });
});


