'use strict';

let inputText = document.querySelector('.inputText'),
    outputText = document.querySelector('.outputText');

    function debounce(func, timeout = 300){
        let timer;
        return (...args) => {
          clearTimeout(timer);
          timer = setTimeout(() => { func.apply(this, args); }, timeout);
        };
      }
      function saveInput(){
        outputText.innerHTML = inputText.value;
      }

      const processChange = debounce(() => saveInput());

      inputText.addEventListener('keyup', processChange);