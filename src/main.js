'use strict';

/* Home - 애니메이션 */
const animatedText = document.querySelectorAll(".animated-text");

function animate(element){
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