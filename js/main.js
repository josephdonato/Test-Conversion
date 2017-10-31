
// $('button').focus {outline:none;}

//Country Dataset//
//https://restcountries.eu/#api-endpoints-response-example//


//Country Time//
//https://timezonedb.com/references/list-time-zone//


//Bing wallpaper http://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=en-US//

// https://timezonedb.com/references/list-time-zone//


$("#submit").click(function(){

  var country = $("#country").val();
  var city = $("#city").val();
  var url = "http://api.timezonedb.com/v2/get-time-zone?key=6PLXMH45B3GQ&format=json&by=zone&zone=" + country + "/" + city;

  $.getJSON(url, function(data)
    {
      // var d = data.formatted;
      // var hours = d.getHours();
      // var minutes = d.getMinutes();

      $("#countryentered").text(data.countryName)
      $("#actualtime").text(data.formatted)
      $("#timezone").text(data.zoneName)
      // $("#testtime").text(hours + minutes)
    }
  );

});
