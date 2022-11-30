$(document).ready(function () {
  $("#tweet-text").on('input', function () {
    const tweet = $('#tweet-text').val();
    const result = (140 - tweet.length);
    $('.counter').text(result).toggleClass('maxChars', result < 0);
  });
});