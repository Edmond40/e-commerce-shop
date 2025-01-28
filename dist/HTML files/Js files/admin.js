// ADMIN DASHBOARD
// Menu Toggle
let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let navIcon = document.querySelector('.navIcon');
let cardBox = document.querySelector('.cardBox');
let details = document.querySelector('.details');
let recentCustomers = document.querySelector('.recentCustomers');


toggle.onclick = function(){
    navigation.classList.toggle("active");
    main.classList.toggle("active");
    navIcon.classList.toggle("active");
    cardBox.classList.toggle("active");
    details.classList.toggle("active");
    recentCustomers.classList.toggle("active");
};


