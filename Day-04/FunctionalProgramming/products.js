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
