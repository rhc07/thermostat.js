
$(document).ready(function() {
 var thermostat = new Thermostat();
 $('#temperature').text(thermostat.temp);


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
