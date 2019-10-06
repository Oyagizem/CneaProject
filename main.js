alert("External js dosyası çalışıyor.");
debugger;

// START NAVBAR ANIMATION

// Get the header__navbar
var navbar = document.getElementById("navbar");

// Get the navigation__item
var item = document.getElementsByClassName("navigation__item");

// Get the logo
var logo = document.getElementsByClassName("navbar-brand");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;


// When the user scrolls the page, execute myFunction 
window.onscroll = function() { 
    myNavbarFunction() 
};

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function myNavbarFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky");

        for (var i = 0; i < item.length; i++) {
            
            if (item[i].className !== "nav-button") {
                item[i].style.color = "#333";
            }   
             
        }
        document.getElementById("logo_path").setAttribute("fill", "#333");

    } else {
        navbar.classList.remove("sticky");
        colorChange();

        document.getElementById("logo_path").setAttribute("fill", "#fff");
    }
}

// Color Change on navigation__item
function colorChange() {
    for (var i = 0; i < item.length; i++) {
        // item[i].style.color = "#fff";
        item[i].style.color = "#fff";
    }
    // logo.style.color="#fff";
    // logo.style.color="#333";
}

    // END NAVBAR ANIMATION
    




    //START HAMBURGER MENU
        function hamburgerFunction() {

            // var navItem = document.getElementsByClassName("navigation__item");
            var right = document.getElementsByClassName("header__topnav--right");
            
            var x = document.getElementById("navbar");

            if(x.classList.contains("isactive")){
                
                x.classList.remove("isactive");
        
                //Yusuf bunun herhalikarda tek elemanlı array olduğunu o sebeple [0] yazmamız gerektiği bilgisini verdi. Önceki hali yani   right.style.display = "none"; çalışmıyordu.
                right[0].style.display = "none";
                
            } else {
                
                x.classList.add("isactive");
                
                // right[0].style.display = "block";
                right[0].style.display = "flex";
                right[0].style.position = "static";



                // right[0].style.top = "3rem";

                // navItem.style.display = "block";
                
                // right.style.opacity = "100";
                // right.style.display = "block";
            }
            
        }

        if (document.documentElement.clientWidth < 900) {
            // scripts
        }

    //END HAMBURGER MENU



//   Start "#services" Multiselect Dropdown Menu

$(function () {
    $('#services').multiselect({

    buttonText: function(options){

        if (options.length === 0) {
        return 'SERVICE À LA PERSONNE ET AUX TERRITOIRES';
        }
        var labels = [];
        options.each(function() {
        if ($(this).attr('value') !== undefined) {
            labels.push($(this).attr('value'));
        } 
        });
        return labels.join(', ');  
    },
    
    buttonWidth: '400px'
    }); 
});
   
// End Script "#services" Multiselect Dropdown Menu


// Start Script "#choix" Multiselect Dropdown Menu

$(function () {
    $('#choix').multiselect({
    buttonText: function(options){
        if (options.length === 0) {
        return 'CHOIX MULTIPLE';
        }
        var labels = [];
        options.each(function() {
        if ($(this).attr('value') !== undefined) {
            labels.push($(this).attr('value'));
        } 
        });
        return labels.join(', ');  
    },
    buttonWidth: '400px'
    }); 
});

// End Script "#choix" Multiselect Dropdown Menu
    
//SLICK SLIDER start
$(document).ready(() => {
    $('.kutu .slick').slick({
    autoplay: false,
    fade: false,
    autoplaySpeed: 2000,
    speed: 2000,
    dots: false, 
    
    prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>'

 });
});

$('.single-item').slick();
//SLICK SLIDER end