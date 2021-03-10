"use strict";

class Thermostat{

  constructor(){
    this.temp = 20;
    this.powerSaving = true;
  };

  up = function(degrees){
    this.temp += degrees;
    if(this.powerSaving === true && this.temp > 25){
      this.temp = 25;
      return 'the maximum temperature is 25 degrees whilst in power saving mode';
    }
    else if(this.powerSaving === false && this.temp > 32){
      this.temp = 32
      return 'the maximum temperature is 32 degrees';
    }
    else return this.temp;

  };

  powerSavingSwitch = function(){
    this.powerSaving === true ? this.powerSaving = false : this.powerSaving = true;
  }

  down = function(degrees){
    this.temp -= degrees;
    if(this.temp < 10){
      this.temp = 10;
      return 'the minimum temperature is 10 degrees';
    };

  };

  reset = function(){
    return this.temp = 20;
  }

  currentEnergyUsage = function(){
    if(this.temp < 18){
      return 'low usage';
    }
    else if(this.temp > 18 && this.temp < 25){
      return 'medium usage';
    }
    else
    return 'high usage';
  }

};
