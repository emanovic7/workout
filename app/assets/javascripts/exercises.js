// // # Place all the behaviors and hooks related to the matching controller here.
// // # All this logic will automatically be available in application.js.
// // # You can use CoffeeScript in this file: http://coffeescript.org/
//
//
$(function(){
  $("a.load_info").on('click', function(e){
    $.ajax({
      method: "GET",
      url: this.href,
    }).done(function( response ) {
        $("div.more-info").html(response)
      });

    e.preventDefault()
  })

  $("a.load_exercises").on('click', function(e){
    $.ajax({
      method: "GET",
      url: "https://wger.de/api/v2/exercise/",
    }).done(function(response){
      $("div.more-exercises").html(response.results[1])
    });

    e.preventDefault()
  })


})
