'use strict';
document.addEventListener('DOMContentLoaded', function(){
var menuButton = document.querySelector('.for-dropdown');
var subMenu = document.querySelector('.dropdown');
    
    menuButton.addEventListener('mouseover', function() {
        subMenu.style.display = 'block';
    });
    menuButton.addEventListener('mouseout', function(){
        subMenu.style.display = 'none';
    })

var buttons = document.querySelectorAll('.read-more') ;
//    console.log(buttons[1]);
    
    
    
    
function showHide(){
    var textArea = this.previousElementSibling;
        if (textArea.style.display === 'none' || textArea.style.display === ''){
            textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>'
        }else{
            textArea.style.display = 'none';
            this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>'
        }
}

//    buttons[0].addEventListener('click', showHide);
    for (var i=0; i < buttons.length; i++){
        buttons[i].addEventListener('click', showHide);
    }
//Zadanie 3

var navBar = document.querySelector('.navbar');
    window.addEventListener('scroll', function(){
        navBar.style.borderBottom = '1px solid #7f7f7f';
    })
    
var escapeButton = document.querySelector('.tasks-btn-wroc');
    this.addEventListener('click', function(){
        window.scroll(0, 0);
    })
});
