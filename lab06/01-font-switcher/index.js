// ref: https://stackoverflow.com/questions/38627822/increase-the-font-size-with-a-click-of-a-button-using-only-javascript

const makeBigger = () => {
   //alert('make bigger!');
   contentValue = document.querySelector(".content");
   style = window.getComputedStyle(contentValue, null).getPropertyValue('font-size');
   currSize = parseFloat(style);
   contentValue.style.fontSize = (currSize + 2) + "px";
   headerValue = document.querySelector("h1");
   style = window.getComputedStyle(headerValue, null).getPropertyValue('font-size');
   currSize = parseFloat(style);
   headerValue.style.fontSize = (currSize + 2) + "px";

};

const makeSmaller = () => {
   //alert('make smaller!');
   contentValue = document.querySelector(".content");
   style = window.getComputedStyle(contentValue, null).getPropertyValue('font-size');
   currSize = parseFloat(style);
   contentValue.style.fontSize = (currSize - 2) + "px";
   headerValue = document.querySelector("h1");
   style = window.getComputedStyle(headerValue, null).getPropertyValue('font-size');
   currSize = parseFloat(style);
   headerValue.style.fontSize = (currSize - 2) + "px";
};


document.querySelector('#a1').addEventListener('click', makeBigger);
document.querySelector('#a2').addEventListener('click', makeSmaller);

