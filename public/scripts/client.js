/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

///////////// CREATE TWEET ELEMENT ///////////////////////////  

  const createTweetElement = function(tweet) {
    return `
    <article
    class = "tweet">
    
    <header>
      <section>
    <img src=${tweet.user.avatars} alt="profilepic"/>
    <h4>${tweet.user.name}</h4>
      </section>
    <h4>${tweet.user.handle}</h4>
    </header>
  
    <h3>${tweet.content.text}</h3>

    <footer>
    <h6>${timeago.format(tweet.created_at)}</h6>
    <ul>
    <li><i class="fa-solid fa-flag"></i></li>
    <li><i class="fa-solid fa-retweet"></i></li>
    <li><i class="fa-solid fa-heart"></i></li>
    </ul>
    </footer>
    </article>`
  };

///////////// RENDER TWEETS ///////////////////////////  
  const renderTweets = function (tweets) {
    for (let tweet of tweets) {
      $('#new-tweets-container').prepend(createTweetElement(tweet));
    }
  };

///////////// LOAD TWEETS ///////////////////////////
const loadTweets = function () {
  $.ajax({
    type: 'GET',
    url: '/tweets',
  }).then(function(tweet) {
    console.log(tweet);
    renderTweets(tweet);
  })
};

///////////// SUBMIT TWEETS ///////////////////////////
const submitTweets = function () {
  $('#tweet-form').on('submit', function (event) {
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: $(this).serialize(),

    }).then(function(res) {
      $('#new-tweets-container').empty();
      loadTweets();
    })
  });
}

$(document).ready(() => {
  loadTweets();
  submitTweets();
});
});














  










