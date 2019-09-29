

window.onload = function(){

document.querySelector('.tabs').addEventListener('click', showTabName);

function showTabName(event){
    if (event.target.className == 'tab-title') {
    let dataTab = event.target.getAttribute('data-tab');

    let tabTitle = document.getElementsByClassName('tab-title');
    for (let k = 0; k < tabTitle.length; k++){
        tabTitle[k].classList.remove('active-tab')
    };
    event.target.classList.add("active-tab");

    let tabContent = document.getElementsByClassName('slide');
   
        for (let i = 0; i < tabContent.length; i++) {
            if (dataTab == i) {
                tabContent[i].style.display = "flex";
            } else {
                tabContent[i].style.display = "none";
            }
        }
 
}
}

}




// let tabs = document.querySelector(".tabs");
// let tab = document.querySelector(".tab"); 
// let slide = document.querySelector(".slide");

//         if (idex === i) {
//             tab.classList.add('tab-active');
//             slide.classList.add('show');
//         } else {
//             tabs[0].classList.add('tab-active');
//             slide[0].classList.add('show');


//         }
//     }

// }



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


