"use strict";

class Thermostat{
  constructor(){
    this.temp = 20;
  };

  up = function(degrees){
    this.temp += degrees;
    return this.temp
  };

  down = function(degrees){
    this.temp -= degrees;
    if(this.temp < 10) { 
      this.temp = 10
      return 'the minimum temperature is 10 degrees'
    };
  };
  
};
