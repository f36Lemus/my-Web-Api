

var date_button = "";

var starWarsAPI = "http://swapi.co/api/people/";

  function dispInfo(data) {

    var $overlay = $('<div id="overlay"></div>');

    // var $caption = $("<p></p>");


    //An image to overlay
    // $overlay.append($image);

    //A caption to overlay
    // $overlay.append($caption);


    //Add overlay
    $("body").append($overlay);

    var dispHTML = '<ul>';
    $.each(data.results, function (i, info){
      dispHTML += '<li>';
      dispHTML += '<img id="character" src= "images/' + info.name + '.jpg">';
      dispHTML += '<button class="name" data-tip ="' + i + '"><h3>' +  info.name + ' </h3>';
      dispHTML += '<p>More information</p></button>';
      dispHTML += '</li>';
    }); 
    dispHTML += '<ul>';
    $('#content').html(dispHTML);

    $("li button").click(function(event){
        event.preventDefault();

        $overlay.show();
        $overlay.transition({opacity: 1}, 800);

        
         date_button = $(this).attr("data-tip");


         var dataOne = data.results[date_button];

         var infoHTML = '<img src = "images/' + dataOne.name + '.jpg">';
             infoHTML += '<ul class="info">';
             infoHTML += '<li><p class="name-bg"> Name: ' + dataOne.name + '</p></li>';
             infoHTML += '<li><p> Gender: ' + dataOne.gender + '</p></li>';
             infoHTML += '<li><p> Height: ' + dataOne.height+ ' cms</p></li>';
             infoHTML += '<li><p> Birth year: ' + dataOne.birth_year + '</p></li>';
             infoHTML += '</ul>';
             infoHTML += '<span>X</span';

             $overlay.html(infoHTML);
  
      });

    

    $overlay.click(function(){
      //Hide the overlay
      $overlay.hide();
      $overlay.transition({opacity: 0});
    });

    
  }

  $.getJSON(starWarsAPI, dispInfo);




 