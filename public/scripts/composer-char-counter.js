// this applies maxChars class to make counter turn blue-red when over 140 chars

$(document).ready(function() {
  $("#tweet-text").on('input', function() {
    const tweet = $('#tweet-text').val();
    const result = (140 - tweet.length);
    $('.counter').text(result).toggleClass('maxChars', result < 0);
  });
});