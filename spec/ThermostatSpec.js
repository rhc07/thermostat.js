"use strict";

describe("Thermostat", function() {

  let thermostat

  beforeEach(function() {
   thermostat = new Thermostat();
  });

  it('is 20 degrees by default', function(){
    expect(thermostat.temp).toEqual(20)
  });

  it('can increase the temperature', function(){
    thermostat.up(5)
    expect(thermostat.temp).toEqual(25)
  });

  it('can decrease the temperature', function(){
    thermostat.down(5)
    expect(thermostat.temp).toEqual(15)
  });
});
