var Calculator = require('./../js/pingpong.js').calculatorModule;

describe ('Calculator', function(){
  var calculator;

  beforeEach(function(){
  calculator = new Calculator(3);
  });

  it('should test whether it can instantiates a calculator object',function(){
    expect(calculator.skin).toEqual(3);
  });

  it('should test whether it can replace number divisible by 3 to ping',function(){
    expect(calculator.pingPong(3)).toEqual([1,2,"ping"]);
  });

  it('should test whether it can replace number divisible by 3 to ping & 5 to pong',function(){
    expect(calculator.pingPong(5)).toEqual([1,2,"ping",4,"pong"]);
  });

  it('should test whether it can replace number divisible by 3 to ping, 5 to pong & 15 to ping-pong',function(){
    expect(calculator.pingPong(15)).toEqual([1,2,"ping",4,"pong","ping",7,8,"ping","pong",11,"ping",13,14,"ping-pong"]);
  });

});
