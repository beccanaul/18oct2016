// using chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi/related?hl=en
// to bypass cors error

document.addEventListener("DOMContentLoaded", function(_event){
  var url = 'https://api.tumblr.com/v2/blog/p5js.tumblr.com/posts/photo?api_key=oTugrABVFxS2grXbeYvjv1MAX0BrNByCKqeG6q7yXc5X7jtGOc';
  document.querySelector('#js-stuff').textContent = 'hello';

  var button = document.querySelector('#js-click');
  button.addEventListener('click', function(event){
    // fetches tumblr

    fetch(url).then(function(response){
      return response.json();
      console.log(response.json());
    }).then(function(myJson){
      // logs data from api
      console.log(myJson);
      // adds photo to img in html
      document.querySelector('img').src = (myJson.response.posts[0].photos["0"].original_size.url);
    });
  });
});
