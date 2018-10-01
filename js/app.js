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

//zadanie 5

var items = document.querySelectorAll('.org');
var dots = document.querySelectorAll('.dot');
    
  
      dots[0].addEventListener('click', function(){
           for (var i = 0; i < dots.length; i++){
     dots[i].classList.remove('active');
    items[i].classList.remove('visible');   
    }
          this.classList.add('active');
            items[0].classList.add('visible');
    })
    dots[1].addEventListener('click', function(){
         for (var i = 0; i < dots.length; i++){
     dots[i].classList.remove('active');
    items[i].classList.remove('visible');   
    }
          this.classList.add('active');
            items[1].classList.add('visible');
    })
    dots[2].addEventListener('click', function(){
         for (var i = 0; i < dots.length; i++){
     dots[i].classList.remove('active');
    items[i].classList.remove('visible');   
    }
          this.classList.add('active');
            items[2].classList.add('visible');
    })
    dots[3].addEventListener('click', function(){
         for (var i = 0; i < dots.length; i++){
     dots[i].classList.remove('active');
    items[i].classList.remove('visible');   
    }
          this.classList.add('active');
            items[3].classList.add('visible');
    })
    
//zadanie 4    
var up = document.getElementById('up');
    up.addEventListener('click', function(){
        window.scroll(0, 0);
    })
    
//zadanie 6
var addButton = document.getElementById('addButton');
var tasksList = document.getElementById('tasksList');
var inputField = document.getElementById('inputField');
    function addTask(){
    var newTaskContent = document.createElement('li');
    var newTask = document.createElement('div');
        newTask.innerHTML = inputField.value;
        
        if (inputField.value === ''){
    var error = document.getElementById('error');
        error.classList.remove('hidden');
            
        }else{       
    var deleteButton = document.createElement('button');
        deleteButton.innerHTML = 'Usuń';
        deleteButton.classList.add('btn', 'delete-btn');
    var error = document.getElementById('error');
        error.classList.add('hidden');
        tasksList.appendChild(newTaskContent);
        newTaskContent.appendChild(newTask);
        newTaskContent.appendChild(deleteButton);
        inputField.value = '';
    deleteButton.addEventListener('click', function(){
         this.parentElement.parentNode.removeChild(this.parentElement);
         error.classList.add('hidden');
    } )}
    };

    addButton.addEventListener('click', addTask);    


});
