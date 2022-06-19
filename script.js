
function operate(a,op,b){

    op = eventbuttonpress.id

    op.id(a,b);


}






const add = function(a, b) {
	return a + b;
};

const subtract = function(a, ...b) {
return a - b;
};

const sum = function(...sum) {
	summed = sum.reduce(totalSum);

  function totalSum(total,currentValue){
    return total + currentValue;
  };
  return summed;
};

const multiply = function(...mult) {
  multiplied = mult.reduce(totalProd)

  function totalProd(total,currentValue){
    return total * currentValue;
  }
  return multiplied;
};

const power = function(a,b) {
  c = a ** b;
  return c;
	
};

const factorial = function() {
	
};
