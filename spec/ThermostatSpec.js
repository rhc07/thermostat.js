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

  it('has a minimum temperature of 10 degrees', function(){
    thermostat.down(15)
    expect(thermostat.temp).toEqual(10)
  });

  it('has power saving on by default', function(){
    expect(thermostat.powerSaving).toBe(true)
  });

  it('has a max of 25 degrees whilst in powersaving mode', function(){
    thermostat.up(20)
    expect(thermostat.temp).toEqual(25)
  });

  it('has a max of 32 degrees', function(){
    thermostat.powerSavingSwitch()
    thermostat.up(25)
    expect(thermostat.temp).toEqual(32)
  });

  it('has a reset function which resets the temp to 20', function(){
    thermostat.reset
    expect(thermostat.temp).toEqual(20)
  });

});
