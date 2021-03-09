"use strict";

describe("Thermostat", function() {

  let thermostat

  beforeEach(function() {
   thermostat = new Thermostat();
  });

  it('is 20 degrees by default', function() {
    expect(thermostat.temp()).toEqual(20)
  });
});
