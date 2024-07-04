
 var clickableText = document.querySelector('#new-arrivals')

 clickableText.addEventListener('click', function() {
     if (clickableText.style.color === '#bbbbbb') {
         clickableText.style.color = '#222';
     } else {
         clickableText.style.color = '#bbb';
     }
 });