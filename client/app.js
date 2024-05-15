function getBathValue() {
    var uiBathrooms = document.getElementsByName("uiBathrooms");
    for(var i in uiBathrooms) {
      if(uiBathrooms[i].checked) {
        return parseInt(i) + 1;
      }
    }
    return -1; // Invalid Value
  }
  
  function getBHKValue() {
    var uiBHK = document.getElementsByName("uiBHK");
    for(var i in uiBHK) {
      if(uiBHK[i].checked) {
        return parseInt(i) + 1;
      }
    }
    return -1; // Invalid Value
  }
  
  function onClickedEstimatePrice() {
    console.log("Estimate price button clicked");
    var sqft = document.getElementById("uiSqft");
    var bhk = getBHKValue();
    var bathrooms = getBathValue();
    var location = document.getElementById("uiLocations");
    var estPrice = document.getElementById("uiEstimatedPrice");

    //var url="/api/predict_home_price";
    var url = "http://localhost:5000/predict_home_price"; // Update the URL with your Flask server domain and port
  
    $.post(url, {
      total_sqft: parseFloat(sqft.value),
      bhk: bhk,
      bath: bathrooms,
      location: location.value
    }, function(data, status) {
      console.log("Received response for predict_home_price request:", data);
      estPrice.innerHTML = "<h2>" + data.estimated_price.toString() + " Lakh</h2>";
      console.log("Status:", status);
    }).fail(function(jqXHR, textStatus, errorThrown) {
      console.error("Error estimating price:", textStatus, errorThrown);
    });
  }
  
  function onPageLoad() {
    console.log("Document loaded");
    //var url="/api/get_location_names";
    var url = "http://localhost:5000/get_location_names"; // Update the URL with your Flask server domain and port
    $.get(url, function(data, status) {
      console.log("Received response for get_location_names request:", data);
      if(data) {
        var locations = data.locations;
        var uiLocations = document.getElementById("uiLocations");
        $('#uiLocations').empty();
        for(var i in locations) {
          var opt = new Option(locations[i]);
          $('#uiLocations').append(opt);
        }
      }
    }).fail(function(jqXHR, textStatus, errorThrown) {
      console.error("Error fetching location names:", textStatus, errorThrown);
    });
  }
  
  window.onload = onPageLoad;
  