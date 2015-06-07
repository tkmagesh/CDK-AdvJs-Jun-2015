var products = [
    {id : 4, name : "Pen", cost : 30, units : 60, category : 2},
    {id : 9, name : "Hen", cost : 50, units : 70, category : 1},
    {id : 7, name : "Den", cost : 60, units : 40, category : 2},
    {id : 3, name : "Len", cost : 70, units : 80, category : 1},
    {id : 6, name : "Zen", cost : 80, units : 90, category : 2},
    {id : 2, name : "Ken", cost : 20, units : 30, category : 1}
]
function print(title, fn){
    console.group(title);
    fn();
    console.groupEnd();
}
print("Initial List", function(){
    console.table(products);
})
print("Sorting", function(){
    print("Default products sort by id", function(){
        function sort(){
            for(var i=0;i< products.length-1; i++)
                for(var j=i+1; j<products.length; j++){
                    var left = products[i],
                        right = products[j];
                    if (left.id > right.id){
                        products[i] = right;
                        products[j] = left;
                    }
                }
        }
        sort();
        console.table(products);
    });
    print("Sort any list by any attribute", function(){
        function sort(list, attrName){
            for(var i=0;i< list.length-1; i++)
                for(var j=i+1; j<list.length; j++){
                    var left = list[i],
                        right = list[j];
                    if (left[attrName] > right[attrName]){
                        list[i] = right;
                        list[j] = left;
                    }
                }
        }
        print("By Cost", function(){
            sort(products, "cost");
            console.table(products);
        });
         print("By Units", function(){
            sort(products, "units");
            console.table(products);
        });

    });
     print("Sort any list by any comparer", function(){
        function sort(list, comparerFn){
            for(var i=0;i< list.length-1; i++)
                for(var j=i+1; j<list.length; j++){
                    var left = list[i],
                        right = list[j];
                    if (comparerFn(left, right) > 0){
                        list[i] = right;
                        list[j] = left;
                    }
                }
        }
        print("By value [ units * cost ]", function(){
            var productComparerByValue = function(p1, p2){
                var p1Value = p1.cost * p1.units,
                    p2Value = p2.cost * p2.units;

                if (p1Value < p2Value) return -1;
                if (p1Value === p2Value) return 0;
                return 1;
            }
            sort(products, productComparerByValue);
            console.table(products);
        });
    });
});
/*
sort
filter
all
any
min
max
average
countBy
aggregate
transform
group
*/
