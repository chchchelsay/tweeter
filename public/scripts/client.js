/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1669309972803
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1669396372803
    }
  ];
 


  const renderTweets = function(tweets) {
    tweets.forEach(tweet => {
      let $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    });
  };
  

  const createTweetElement = function(tweetData) {
    let  $tweet = $(`
<article class = "tweet">
  
<header >
  <section>
    <img src=${tweetData.user.avatars} alt="profilepic"/>
    <h4>${tweetData.user.name}</h4>
    </section>
    
    <h4>${tweetData.user.handle}</h4>
</header>
    
  <h3>${tweetData.content.text}</h3>
  
<footer>
    <h6>${tweetData.created_at}</h6>
    <ul>
      <li><i class="fa-solid fa-flag"></i></li>
      <li><i class="fa-solid fa-retweet"></i></li>
      <li><i class="fa-solid fa-heart"></i></li>
    </ul>
</footer>
      
  </article>`);

    return $tweet;
  };
  renderTweets(data);
});

//AJAX UPDATES FOR FORM SUBMIT

$('#new-tweet').submit(function(event) {
  event.preventDefault();
  const tweet = $(this).serialize();

  $.ajax({
    type: "POST",
    url: '/tweets/',
    data: tweet
  }).then(function(res) {
    console.log(res)
  });
});


