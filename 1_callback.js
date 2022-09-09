/**
 
As we knows in javaScript we can pass a function as paramter and return it,
that is higher order function.

Callback : is also a higher order function we pass a function as a argument calling it after letter

callback help us to handle block I/O intensive work.
like : In fileSystem when we are readding file it may be its take long and our main thread will blocked.
       to handle this we use callback.

 */

// Example A Coffee Shop

//  Customer come and order
// 1 check order    -> may be it take time if not coffee throw error !
// 2 process        -> it also take time
// 3 serve order    -> thank you

/**   How  we Normally write

function checkOrder(order){
    if(order == "coffee"){
        setTimeout(()=>{
            console.log(" Ordered ");
        }, 1000);
    }
    else{
        throw new Error("Only Coffee is avaible");
    }
}
function processOrder(){
    setTimeout(()=>{
        console.log("order has been processed... ");
    },2000);
}
function serveOrder(){
    console.log("thank you visit again");
}

checkOrder("coffee");
processOrder();
serveOrder(); 

 */  

function checkOrder(order, callback){
    let flag = true;
    if(order == "coffee"){
        setTimeout(()=>{
            console.log(" Order picked ");
        }, 1000);
    }
    else{
        //throw new Error("Only Coffee is avaible");
        flag = " Only Coffee is avaible";
    }
    callback(flag);
}

function processOrder(callback2){

    setTimeout(()=>{
        console.log(" Order processing... ");
    },2000);

    callback2();
}

function serveOrder(){
    setTimeout(()=>{
        console.log(" thank you visit again");
    },2000)
}

checkOrder("coffee",function(err){
    if(err != true){
        console.log(err);
    }
    else{
        processOrder(function(){

            serveOrder();
        });
    }
});

console.log(" Hey, i am not blocking, i can do anythink like talking to my girlfriend");
