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
    }).success(function( response ) {
        $("div.more-info").html(response)
      }).error(function(checking){
        alert("Request Error!")
      });

    e.preventDefault()
  })

  $("a.load_exercises").on('click', function(e){
    // $.ajax({
    //   method: "GET",
    //   url: "https://wger.de/api/v2/exercise/",
    // }).success(function(response){
    //   $("div.more-exercises").html(response);
    // }).error(function(checking){
    //   alert("Request Error!")
    // });

    $.get("https://wger.de/api/v2/exercise/").success(function(json){
      //debugger
      $("div.more-exercises").html("")
    })

    e.preventDefault()
  })


})
