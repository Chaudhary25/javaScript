let amount = 5432;

if(amount>=500){
    console.log("500 notes "+ Math.floor(amount/500));
    amount = amount%500;
}