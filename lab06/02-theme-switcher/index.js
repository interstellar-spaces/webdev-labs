/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const makeDefault = () => {
   //alert('make smaller!');
   document.querySelector("body").className = "default";
};
const makeOcean = () => {
   //alert('make smaller!');
   document.querySelector("body").className = "ocean";
};
const makeDesert = () => {
   //alert('make smaller!');
   document.querySelector("body").className = "desert";
};
const makeContrast = () => {
   //alert('make smaller!');
   document.querySelector("body").className = "high-contrast";
};



document.querySelector('#default').addEventListener('click', makeDefault);
document.querySelector('#ocean').addEventListener('click', makeOcean);
document.querySelector('#desert').addEventListener('click', makeDesert);
document.querySelector('#high-contrast').addEventListener('click', makeContrast);
