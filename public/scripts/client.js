/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  loadTweets();


  $('#new-tweet-form').submit(function(event) {
    event.preventDefault();
    const tweet = $(this).serialize();
  
    $.ajax({
      type: "POST",
      url: '/tweets/',
      data: tweet,
      success: () => {
        loadTweets();
      }
    });
  });


  //CREATE TWEET ELEMENT
  const createTweetElement = function(tweetData) {
    let  $tweet = $(`
<article 
class = "tweet">

<header >
<section>
  <img src=${tweetData.user.avatars} alt="profilepic"/>
  <h4>${tweetData.user.name}</h4>
  </section>
  
  <h4>${tweetData.user.handle}</h4>
</header>
  
<h3>${tweetData.content.text}</h3>

<footer>
<h6>${timeago.format(tweetData.created_at)}</h6>
  <ul>
    <li><i class="fa-solid fa-flag"></i></li>
    <li><i class="fa-solid fa-retweet"></i></li>
    <li><i class="fa-solid fa-heart"></i></li>
  </ul>
</footer>
    
</article>`);

    return $tweet;
  };


  //RENDER TWEETS
  const renderTweets = (tweets) => {
    tweets.forEach(tweet => {
      let $tweet = createTweetElement(tweet);
      $(".new-tweet-container").append($tweet);
    });
  };

  //LOAD TWEETS
  const loadTweets = () => {
    $.ajax({
      type: 'GET',
      url: '/tweets',
      success: (tweets) => {
        renderTweets(tweets);
      }
    });
  };
});