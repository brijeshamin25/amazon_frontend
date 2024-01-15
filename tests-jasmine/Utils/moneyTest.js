import { formatCurrency } from "../../Script/Utils/money.js";

describe('test suite: formateCurrency', function(){
  it('converts cents into dollars', function() {
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('work with 0', function() {
    expect(formatCurrency(0)).toEqual('0.00');  
  });

  it('rounds up to the nearest cent', function() {
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});