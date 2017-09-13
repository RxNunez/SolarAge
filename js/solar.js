function Calculator(skinName) {
  this.skin = skinName;
}

  Calculator.prototype.getSecond = function(age){
    const secPerYear = 1000 * 60 * 60 * 24 * 365;
    let sec = ((age * secPerYear));
    return sec;
  };
  Calculator.prototype.getEarth = function(bday){
    let today = new Date();
    let born = new Date(bday);
    let output = today.diff(born, 'seconds');
    return output;
  };
  Calculator.prototype.getMercury = function(age){
    let mercury = Math.floor((age*0.24));
    return mercury;
  };
  Calculator.prototype.getVenus = function(age){
    let venus = Math.floor((age*0.62));
    return venus;
  };
  Calculator.prototype.getMars = function(age){
    let mars = Math.floor((age*1.88));
    return mars;
  };
  Calculator.prototype.getJupiter = function(age){
    let jupiter = Math.floor((age*11.86));
    return jupiter;
  };
  Calculator.prototype.timeLeft = function(world, userAge){
    const expectancy = 71.5; //world average age 2016
    let lifeLeft ="";
    let mercuryLife = this.getMercury(expectancy);
    let venusLife = this.getVenus(expectancy);
    let marsLife = this.getMars(expectancy);
    let jupiterLife = this.getJupiter(expectancy);
    if (world === "mercury" && userAge <= mercuryLife){
      lifeLeft = expectancy - this.getMercury(userAge);
    }else if (world === "venus" && userAge <= venusLife){
      lifeLeft = expectancy - this.getVenus(userAge);
    }else if (world === "mars" && userAge <= marsLife){
      lifeLeft = expectancy - this.getMars(userAge);
    }else if (world === "jupiter" && userAge <= jupiterLife){
      lifeLeft = expectancy - this.getJupiter(userAge);
    }else if((world === "mercury" && userAge > mercuryLife) || (world === "venus" && userAge > venusLife) || (world === "mars" && userAge > marsLife) || (world === "jupiter" && userAge > jupiterLife)) {
      leftLife = `You should be dead on ${world}!`;
    }
    return lifeLeft;

};
exports.calculatorModule = Calculator;
