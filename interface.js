
$(document).ready(function() {
 var thermostat = new Thermostat();
 $('#temperature').text(thermostat.temp);

 $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
   $('#city').text(data.name);
   $('#current-temperature').text(data.main.temp);
   $('#weather-conditions').text(data.weather[0].description);
   $('#humidity').text(data.main.humidity);
   $('#wind-speed').text(data.wind.speed);
 })

 $('#select-city').submit(function(event){
   event.preventDefault();
   var city = $('#current-city').val();
   $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
     $('#current-temperature').text(data.main.temp);
     $('#city').text(data.name);
     $('#weather-conditions').text(data.weather[0].description);
     $('#humidity').text(data.main.humidity);
     $('#wind-speed').text(data.wind.speed);
   });
 });

$('#temperature-up').on('click', function() {
  thermostat.up();
  updateTemperature();
});

$('#temperature-down').click(function() {
  thermostat.down();
  updateTemperature();
});

$('#temperature-rest').click(function() {
  thermostat.reset();
  updateTemperature();
});

$('#powersaving-on').click(function() {
  thermostat.powerSavingSwitch();
  $('#power-saving').text('on')
  updateTemperature();
})

$('#powersaving-off').click(function() {
  thermostat.powerSavingSwitch();
  $('#power-saving').text('off')
  updateTemperature();
})

function updateTemperature() {
  $('#temperature').text(thermostat.temp);
  $('#temperature').attr('class', thermostat.currentEnergyUsage());
};

})
