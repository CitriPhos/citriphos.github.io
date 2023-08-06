//alert("testing for script");
const pageLinkBtn1=document.querySelector('page1btn');
const pageLinkBtn2=document.querySelector('page2btn');
const pageLinkBtn3=document.querySelector('page3btn');
const expandableBtn1=document.querySelector('#expandableBtn1');
const expandableBtn2=document.querySelector('#expandableBtn2');
const expandableBtn3=document.querySelector('#expandableBtn3');
const expandableBtn4=document.querySelector('#expandableBtn4');

function hideall() {
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