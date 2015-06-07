  define([], function(){
    function SalaryCalculator(defaults){
            var _data = defaults;
            this.get = function(attrName){
                return _data[attrName];
            };
            this.set = function(attrName, value){
                _data[attrName] = value;
                triggerChangeFor(attrName);
                triggerChangeFor('all');
            };
            function triggerChangeFor(attrName){
                var listenerFns = _events[attrName] || [];
                listenerFns.forEach(function(listenerFn){
                    listenerFn();
                });
            }
            var _events = {
                all : []
            };
            this.addChangeListener = function(attrName, listenerFn){
                _events[attrName] = _events[attrName] || [];
                _events[attrName].push(listenerFn);
            };
            this.toJSON = function(){
                return JSON.parse(JSON.stringify(_data));
            }



        }
    SalaryCalculator.prototype.calculate = function(){
            var gross = this.get('basic') + this.get('hra') + this.get('da');
            var net = gross * ((100-this.get('tax'))/100);
            this.set('salary', net);

        }
    return SalaryCalculator;
  });
