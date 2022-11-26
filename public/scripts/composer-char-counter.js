$(document).ready(function() {

  $('#tweet-text').on('input', () => {
    const counter = $('#tweet-text').closest('form').children('div').children('output');
    const tweet = $('#tweet-text').val();
    const result = (140 - tweet.length);

    if(result >= 0){  
      counter.removeClass('maxChars');
    }
    else {
      counter.addClass('maxChars');
    }
    counter.val(result);
});
});