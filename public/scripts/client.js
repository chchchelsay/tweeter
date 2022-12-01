/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const escape = function(str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

///////////// CREATE TWEET ELEMENT ///////////////////////////

const createTweetElement = function(tweet) {
  return `
    <article
    class = "tweet">
    
    <header>
      <section>
    <img src=${escape(tweet.user.avatars)} alt="profilepic"/>

    <h4>${escape(tweet.user.name)}</h4>
      </section>
    <h4>${escape(tweet.user.handle)}</h4>
    </header>
  
    <h3>${escape(tweet.content.text)}</h3>

    <footer>
    <h6>${escape(timeago.format(tweet.created_at))}</h6>
    <ul>
    <li><i class="fa-solid fa-flag"></i></li>
    <li><i class="fa-solid fa-retweet"></i></li>
    <li><i class="fa-solid fa-heart"></i></li>
    </ul>
    </footer>
    </article>`;
};

///////////// RENDER TWEETS ///////////////////////////
const renderTweets = function(tweets) {
  for (let tweet of tweets) {
    $('#tweets-container').prepend(createTweetElement(tweet));
  }
};

///////////// LOAD TWEETS ///////////////////////////
const loadTweets = function() {
  $('.error-char').text('Tweets must be 140 characters or less. Keep it short and sweet!').hide();
  $('.error-none').text('Tweets cannot be blank!').hide();
  $.ajax('/tweets', {
    type: 'GET',
  }).then(function(tweet) {
    $('#tweets-container').empty();
    renderTweets(tweet);
  });
};

///////////// SUBMIT TWEETS ///////////////////////////
const submitTweets = function() {
  $("#tweet-form").on('submit', function(event) {
    event.preventDefault();
    if ($('#tweet-text').val().length > 140) {
      return $('.error-char').text('Tweets must be 140 characters or less. Keep it short and sweet!').slideDown('slow');
    } else if (!$('#tweet-text').val()) {
      return $('.error-none').text('Tweets cannot be blank!').slideDown('slow');
    }
    $.ajax('/tweets', {
      type: "POST",
      data: $(this).serialize(),

    }).then(function() {
      loadTweets();
      $('#tweet-text').val('');
    }).catch(function(error) {
      console.log(error);
    })
  });
};

$(document).ready(() => {
  loadTweets();
  submitTweets();
});







  










