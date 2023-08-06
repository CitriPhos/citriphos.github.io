//alert("testing for script");
const pageLinkBtn0=document.querySelector('page0btn');
const pageLinkBtn1=document.querySelector('page1btn');
const pageLinkBtn2=document.querySelector('page2btn');
const pageLinkBtn3=document.querySelector('page3btn');
var allpages=document.querySelectorAll(".page");

const expandableBtn1=document.querySelector('#expandableBtn1');
const expandableBtn2=document.querySelector('#expandableBtn2');
const expandableBtn3=document.querySelector('#expandableBtn3');
const expandableBtn4=document.querySelector('#expandableBtn4');
// page 3
const expandableBtn5=document.querySelector('#expandableBtn5');
const expandableBtn6=document.querySelector('#expandableBtn6');
const expandableBtn7=document.querySelector('#expandableBtn7');
const expandableBtn8=document.querySelector('#expandableBtn8');
const expandableBtn9=document.querySelector('#expandableBtn9');
// page 2
const topicBtn1 = document.querySelector("#topicBtn1");
const topicBtn2 = document.querySelector("#topicBtn2");
const topicBtn3 = document.querySelector("#topicBtn3");
const topicBtn4 = document.querySelector("#topicBtn4");
const topicBtn5 = document.querySelector("#topicBtn5");
// page1
const topicBtn6 = document.querySelector("#topicBtn6");
const topicBtn7 = document.querySelector("#topicBtn7");
const topicBtn8 = document.querySelector("#topicBtn8");
const topicBtn9 = document.querySelector("#topicBtn9");

var allTopics=document.querySelectorAll(".subTopic");

hideall();
function hideall() { //function to hide all pages
    for(let onepage of allpages){ //go through all subtopic pages
    onepage.style.display="none"; //hide it
    }
    hideallTopics();
}
showPg(0);

function showPg(pgno){ //function to show selected page no
    hideall();
    //select the page based on the parameter passed in
    let onepage=document.querySelector("#page"+pgno);
    //show the page
    onepage.style.display="block";
}

    /*Listen for clicks on the buttons, assign anonymous
    eventhandler functions to call show function*/
    page0btn.addEventListener("click", function () {
        showPg(0);
    });
page1btn.addEventListener("click", function () {
    showPg(1);
});
page2btn.addEventListener("click", function () {
    showPg(2);
});
page3btn.addEventListener("click", function () {
    showPg(3);
});

function hideallTopics() { //function to hide all pages
    for(let oneTopic of allTopics){ //go through all subtopic pages
    oneTopic.style.display="none"; //hide it
    }
}

function show(topicNo)
{
    let oneTopic=document.querySelector("#subTopic"+topicNo);
    oneTopic.style.display="block";
    //alert("!");
}

//pageLinkBtn1.addEventListener("click", function () {goToPage1();});
expandableBtn1.addEventListener("click", function () {show(1);});
expandableBtn2.addEventListener("click", function () {show(2);});
expandableBtn3.addEventListener("click", function () {show(3);});
expandableBtn4.addEventListener("click", function () {show(4);});
//page 3
expandableBtn5.addEventListener("click", function () {show(5);});
expandableBtn6.addEventListener("click", function () {show(6);});
expandableBtn7.addEventListener("click", function () {show(7);});
expandableBtn8.addEventListener("click", function () {show(8);});
expandableBtn9.addEventListener("click", function () {show(9);});
// page 2
topicBtn1.addEventListener("click", function () {hideallTopics(); show(10);});
topicBtn2.addEventListener("click", function () {hideallTopics(); show(11);});
topicBtn3.addEventListener("click", function () {hideallTopics(); show(12);});
topicBtn4.addEventListener("click", function () {hideallTopics(); show(13);});
topicBtn5.addEventListener("click", function () {hideallTopics(); show(14);});
// page 1
topicBtn6.addEventListener("click", function () {hideallTopics(); show(15);});
topicBtn7.addEventListener("click", function () {hideallTopics(); show(16);});
topicBtn8.addEventListener("click", function () {hideallTopics(); show(17);});
topicBtn9.addEventListener("click", function () {hideallTopics(); show(18);});
/*for hamMenu */
const hamBtn=document.querySelector("#hamIcon");
hamBtn.addEventListener("click",toggleMenus);
const menuItemsList=document.querySelector("nav ul");

function toggleMenus(){ /*open and close menu*/
menuItemsList.classList.toggle("menuShow");
/*menuItemsList.classList.add("menuShow");
    if(menuItemsList.style.display=="block")
        menuItemsList.style.display="none";
    else menuItemsList.style.display="block";*/
}//can optimize using toggle class with css transitions
