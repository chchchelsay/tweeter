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
      console.log($tweet);
      $('#tweets-container').append($tweet);
    });
  };
  
  const createTweetElement = function(tweetData) {
    let  showTweets = $(`
<article class = "tweet">
  <header >
    <img src=${tweetData.user.avatars} alt="profilepic"/>
    <h4>${tweetData.user.name}</h4>
    <h4>${tweetData.user.handle}</h4>
  </header>
    
  <h3>${tweetData.content.text}</h3>
  
  <footer>
    <h6>${tweetData.created_at}</h6>
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i></i>
      <i class="fa-solid fa-heart"></i>
  </footer>
      
  </article>`);

    return showTweets;
  };
  renderTweets(data);
});