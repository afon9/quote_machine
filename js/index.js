var rQuote = "";
var rAuthor = "";
var tweetURL = "";

var json = function() {
  $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?")             
    .done(update)
    .fail(handleErr)
    
  function update(response) {
      rQuote = response.quoteText;
      rAuthor = response.quoteAuthor;
      $('.q-text').html('"' + rQuote.trim() + '"');
      $('.q-author').html("- " + rAuthor);
      tweetURL = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + rQuote + '" -' + rAuthor);
      console.log("URL = " + tweetURL);
      console.log("Quote = " + rQuote);
      console.log("Author = " + rAuthor);
      return [rQuote, rAuthor];
    }
  
  function handleErr(jqxhr, textStatus, err) {
    console.log("Request Failed: " + textStatus + ", " + err);
    alert("Error, please check console for details!!");
    }

};

$(document).ready(function() {
   var json1 = json();
  $("#randomize").click(function() {
    var json2 = json();
  })
})

/*json output example
{"quoteText":"When we quit thinking primarily about ourselves and our own self-preservation, we undergo a truly heroic transformation of consciousness. ","quoteAuthor":"Joseph Campbell","senderName":"","senderLink":"","quoteLink":"http://forismatic.com/en/a966f4a61b/"}
*/