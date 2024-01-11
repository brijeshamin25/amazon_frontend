import { formatCurrency } from "../Script/Utils/money.js";

console.log("Test suite: formateCurrency");

console.log("Convert Cents into dollars");

if(formatCurrency(2095) === '20.95'){
  console.log("Passed");
}else{
  console.log("Failed");
}

console.log("Works with 0");

if(formatCurrency(0) === '0.00'){
  console.log("Pass");
}else{
  console.log("Fail");
}

console.log("Rounds up to the nearest cent");

if(formatCurrency(2000.5) === '20.01'){
  console.log("true");
}else{
  console.log("false");
}

console.log("Rounds up to the nearest cent");

if(formatCurrency(2000.4) === '20.00'){
  console.log("true");
}else{
  console.log("false");
}

