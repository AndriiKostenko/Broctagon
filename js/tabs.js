
let tabs = document.querySelector(".tabs");
let tab = document.querySelector(".tab"); 
let slide = document.querySelector(".slide");;

function showTabName(slideNumber, index){
    for (let i = 0; i < tabs.length; i++) {
        if (idex === i) {
            tab.classList.add('tab-active');
            slide.classList.add('show');
        } else {
            tabs[0].classList.add('tab-active');
            slide[0].classList.add('show');


        }
    }

}



// //services  


// let tab; // заголовок вкладки
// let tabContent; // блок содержащий контент вкладки
 
// window.onload=function() {
//     tabContent=document.getElementsByClassName('slide');
//     tab=document.getElementsByClassName('tab-title');
//     hideTabsContent(1);
// }

// function hideTabsContent(a) {
//     for (var i=a; i<tabContent.length; i++) {
//         tabContent[i].classList.remove('show');
//         tabContent[i].classList.add("hide");
//         tab[i].classList.remove('whiteborder');
//     }
// }




// document.getElementById('tabs').onclick= function (event) {
//     let target=event.target;
//     if (target.className=='tab') {
//        for (var i=0; i<tab.length; i++) {
//            if (target == tab[i]) {
//                showTabsContent(i);
//                break;
// }}}}

// function showTabsContent(b){
//     if (tabContent[b].classList.contains('hide')) {
//         hideTabsContent(0);
//         tab[b].classList.add('tab-active');
//         tabContent[b].classList.remove('hide');
//         tabContent[b].classList.add('show');
//     }
// }