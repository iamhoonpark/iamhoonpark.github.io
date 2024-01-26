'use strict';

/* Home - 애니메이션 */
const animatedText = document.querySelectorAll(".animated-text");

function animate(element) {
  const textArray = element.innerText.split("");
  element.firstChild.remove();
  
  const elArray = textArray.map(
    (letter,index)=>{
      if(letter==" ") letter = '&nbsp;';
      var el = document.createElement("span");
      el.className = "letter";
      el.innerHTML = letter;
      el.style.animationDelay = index/(textArray.length)+"s";
      element.appendChild(el);
      return el;
    }
  );
  element.innerHtml = elArray;
}

Array.from(animatedText).map(animate)


/* PopUp - 애니메이션 */
const popUp = document.querySelector('.pop-box');
const target = document.querySelector('#about');

function displayPopUp() {
  const targetTop = target.getBoundingClientRect().bottom;
  const windowHeight = window.innerHeight;

  if (targetTop < windowHeight) {
    popUp.classList.add('show');
  } else {
    popUp.classList.remove('show');
  }
}

window.addEventListener('scroll', displayPopUp);

displayPopUp();


/* PopUp - 닫기버튼 */
document.querySelector('.close-btn').addEventListener('click', function() {
  const popBox = document.querySelector('.pop-box');
  popUp.classList.remove('show');
  setTimeout(function() {
      popBox.parentNode.removeChild(popBox);
  }, 100);
});