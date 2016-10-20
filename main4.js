document.addEventListener("DOMContentLoaded", function(_event){
  var url = 'https://api.tumblr.com/v2/blog/p5js.tumblr.com/posts/photo?api_key=oTugrABVFxS2grXbeYvjv1MAX0BrNByCKqeG6q7yXc5X7jtGOc';
  document.querySelector('#js-stuff').textContent = 'hello';

  var button = document.querySelector('#js-click');
  button.addEventListener('click', function(event){
    fetch(url).then(function(response){
      return response.json();
    }).then(function(myJson){
      document.querySelector('#photo').src = (myJson.response.posts[1].photos["0"].original_size.url)
    });
  });
});
