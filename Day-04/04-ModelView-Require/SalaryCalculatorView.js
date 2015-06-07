define(['jquery','handlebars', 'text!calculatorTemplate.html', 'utils'], function($, Handlebars, calculatorTemplate, utils){
    function SalaryCalculatorView(calculator){
        var $el = this.$el = $("<div></div>");

        this.initialize = function(){
            $el.on("change", "#txtBasic", function(){
                calculator.set('basic', this.value.toInt());
            });
            $el.on("change", "#txtHra", function(){
                calculator.set('hra', this.value.toInt());
            });
            $el.on("change", "#txtDa", function(){
                calculator.set('da', this.value.toInt());
            });
            $el.on("change", "#rangeTax", function(){
                calculator.set('tax', this.value.toInt());
            });
            $el.on("click", "#btnCalculate",function(){
                calculator.calculate();
            });


            calculator.addChangeListener("all", (function(){
                this.render();
            }).bind(this))
        };

        this.render = function(){
            var templateFn = Handlebars.compile(calculatorTemplate);
            var result = templateFn(calculator.toJSON());
            $el.html(result);
            return this;
        }
    }
    return SalaryCalculatorView;
});
