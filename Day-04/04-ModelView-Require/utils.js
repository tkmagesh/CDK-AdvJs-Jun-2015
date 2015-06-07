  define([], function(){
    String.prototype.toInt = function(){
        return parseInt(this.toString(),10);
    }
  });
