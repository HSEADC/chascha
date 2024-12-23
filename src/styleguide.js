document.addEventListener("DOMContentLoaded", function () {
    var navigation = document.querySelector(".navigation");
    var up_button = document.querySelector(".up_button");
    var top = navigation.offsetTop;

    window.addEventListener("scroll", function () {
        if (window.scrollY >= top) {
            navigation.style.position = "fixed";
            navigation.style.top = "-33%"; 
            navigation.style.zIndex = "10"; 
            up_button.style.display = 'block';
        } else {
            navigation.style.position = ""; 
            navigation.style.top = ""; 
            navigation.style.zIndex = "";
            up_button.style.display = 'none';
        }
    });
});


