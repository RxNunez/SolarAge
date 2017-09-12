var Calculator = require('./../js/pingpong.js').calculatorModule;

describe ('Calculator', function(){
  var calculator;

  beforeEach(function(){
  calculator = new Calculator(3);
  });

  it('should test whether it can instantiates a calculator object',function(){
    expect(calculator.skin).toEqual(3);
  });


  });

});
