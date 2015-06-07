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

print("Filter", function(){
    print("All costly products [Specific]", function(){
        function filter(){
            var result = [];
            for(var i=0; i<products.length; i++){
                var product = products[i];
                if (product.cost > 50){
                    result.push(product)
                }
            }
            return result;
        };
        var costlyProducts = filter();
        console.table(costlyProducts);
    });
    print("Generic Filter", function(){
        function filter(list, predicate){
            var result = [];
            for(var i=0; i<list.length; i++){
                var item = list[i];
                if (predicate(item)){
                    result.push(item)
                }
            }
            return result;
        };
        function negate(predicate){
            var negatedPredicate = function() {
                return !predicate.apply(this, arguments);
            };
            return negatedPredicate;
        }
        var costlyProductPredicate = function(p) { return p.cost > 50; }
        var category1ProductPredicate = function(p){ return p.category === 1;};

        print("Costly products [ cost > 50 ]", function(){
            var costlyProducts = filter(products, costlyProductPredicate);
            console.table(costlyProducts);
        });
        print("All category-1 products", function(){
            var allCategory1Products = filter(products, category1ProductPredicate);
            console.table(allCategory1Products);
        });

        print("Affordable products [ !costlyProduct ]", function(){
            var affordableProductPredicate = negate(costlyProductPredicate);
            var affordableProducts = filter(products, affordableProductPredicate);
            console.table(affordableProducts);
        });
        print("All non category-1 products", function(){
            var nonCategory1ProductPredicate = negate(category1ProductPredicate);
            var allNonCategory1Products = filter(products, nonCategory1ProductPredicate);
            console.table(allNonCategory1Products);
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
