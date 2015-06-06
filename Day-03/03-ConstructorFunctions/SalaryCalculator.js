/*
Create a class "SalaryCalculator" that can be intialized with basic, hra, da, tax.
By default, the "salary" attribute is initialized to 0.
The calculator exhibits a method "calculate()" which when invoked, populates the "salary" with the appropriate value (basic + hra + da - tax%)
*/

function SalaryCalculator(basic, hra, da, tax){
    this.basic = basic;
    this.hra = hra;
    this.da = da;
    this.tax = tax;
    this.salary = 0;
    this.calculate = function(){
        var gross = this.basic + this.hra + this.da;
        this.salary = gross * ((100-this.tax)/100);
    }
}

function extend(dest, sources){
   for(var i=0; i<sources.length; i++){
       var source = sources[i];
       for(var key in source){
           if (source.hasOwnProperty(key)){
              dest[key] =  source[key];
           }
       }
   }
}

function SalaryCalculator(param){
    var defaults = {basic : 0, hra : 0, da : 0, tax : 0, salary : 0};
    extend(this, [].concat(defaults, [].slice.call(arguments,0)));
    this.calculate = function(){
        var gross = this.basic + this.hra + this.da;
        this.salary = gross * ((100-this.tax)/100);
    }
}
var calc = new SalaryCalculator({basic : 10000, tax : 10})




