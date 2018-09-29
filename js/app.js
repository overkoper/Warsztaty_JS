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

});
