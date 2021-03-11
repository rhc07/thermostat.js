"use strict";

class Thermostat{

  constructor(){

    this.MAXIMUM_TEMPERATURE_PSM = 32
    this.MINIMUM_TEMPERATURE_PSM = 25

    this.MINIMUM_TEMPERATURE = 10

    this.temp = 20;
    this.powerSaving = true;
  };

  getCurrentTemperature = function() {
    return this.temp;
  };

  up = function(degrees = 1){
    this.temp += degrees;

    if(this.powerSaving === true && this.temp > this.MINIMUM_TEMPERATURE_PSM){
      this.temp = this.MINIMUM_TEMPERATURE_PSM;
      return 'the maximum temperature is 25 degrees whilst in power saving mode';
    }

    else if(this.powerSaving === false && this.temp > this.MAXIMUM_TEMPERATURE_PSM){
      this.temp = this.MAXIMUM_TEMPERATURE_PSM;
      return 'the maximum temperature is 32 degrees';
    }

    else return this.temp;

  };

  powerSavingSwitch = function(){
    this.powerSaving === true ? this.powerSaving = false : this.powerSaving = true;
  }

  down = function(degrees = 1){
    this.temp -= degrees;

    if(this.temp < this.MINIMUM_TEMPERATURE){
      this.temp = this.MINIMUM_TEMPERATURE;
      return 'the minimum temperature is 10 degrees';
    }

  };

  reset = function(){
    return this.temp = 20;
  }

  currentEnergyUsage = function(){
    if(this.temp <= 18){
      return 'low-usage';
    }

    else if(this.temp > 18 && this.temp < 25){
      return 'medium-usage';
    }

    else
    return 'high-usage';
  }

};
