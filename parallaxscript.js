let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains_behind = document.getElementById('mountains_behind');
let text = document.getElementById('text');
let text2 = document.getElementById('text2');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');

window.addEventListener('scroll', function(){
  let value = window.scrollY;
  var limit = Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight;
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 0.95 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0.5 + 'px';
  text.style.marginRight = 51 * (value/limit) + '%';
  text.style.marginTop = value * 1.5 + 'px';
  text2.style.marginRight = 51 * (value/limit) + '%';
  text2.style.marginTop = value * 1.5 + 'px';
  btn.style.marginTop = value * 1.5 + 'px';
})
