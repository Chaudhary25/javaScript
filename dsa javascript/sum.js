let pr = prompt("enter a natural number");

if(pr===null){
    console.log("cancelled");
}
else{
    let n = Number(pr);

    if(isNaN(n)){
        console.log("invelid input");
    }
    else {
        if(n>0){
            var sum = 0;
            for(var i=1; i<=n; i++){
                sum = sum +i
            }
            console.log(sum);
        }
        else{
            console.log("should be +ve and more than 0");
        }
    }
}