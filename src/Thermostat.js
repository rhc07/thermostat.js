"use strict";

class Thermostat{
  constructor(){
    this.temp = 20;
    this.powerSaving = true
  };

  up = function(degrees){
    this.temp += degrees;
    if(this.powerSaving === true && this.temp > 25){
      this.temp = 25
      return 'the maximum temperature is 25 whilst in power saving mode'
    } 
    else { return this.temp 
    }
   
    
  };

  down = function(degrees){
    this.temp -= degrees;
    if(this.temp < 10){ 
      this.temp = 10
      return 'the minimum temperature is 10 degrees'
    };

  };
  
};
