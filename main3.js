document.addEventListener("DOMContentLoaded", function(event){
  var url = 'https://api.tumblr.com/v2/blog/p5js.tumblr.com/posts/photo';


  var button = document.querySelector('#js-click');
  button.addEventListener('click', function(event){
    document.querySelector('#js-stuff').textContent = 'hello';
  });
});
