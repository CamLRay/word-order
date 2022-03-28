$(document).ready(function() {
  $("#form").submit(function (event) {
    event.preventDefault();
    const input = $("#input-field").val().trim().split(" ");  

    uniqueWordsArray = [];
    wordCount = [];
    wordCounting(uniqueWords(input), input);
    
    $("#list").text("");
    wordCount.forEach(function(element){
      $("#list").append("<li>" + element + "</li>");
    });
  });
});

    // let uniqueWordsArray = [];
    // let wordCount =  [];
  function  uniqueWords(array) {
    array.forEach(function(word) {
      if (!uniqueWordsArray.includes(word) && word !== "") {
        uniqueWordsArray.push(word);
      }  
    });
    return uniqueWordsArray;
  };

  function wordCounting(array1, array2) {
    array1.forEach(function(word) {
      let counting = 0;
      array2.forEach(function(otherWord) {
        if (word === otherWord) {
          counting++
        }
      });
      return wordCount.push(word + " " + counting);
    });
  };

  
// word this word that something else this the word that is not the word
//expected output: word this that something else the is not

// count the repeated words
// word this word that something else this the word that is not the word
// expected output: word 4, this 2, that 2, something 1, else 1, is 1, not 1, the 2