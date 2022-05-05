
var front= document.querySelector('.front');


front.addEventListener('click', function(){
  if(!front.classList.contains('anim')){
    console.log("flip!")
    front.classList.add('anim');
  }
});
