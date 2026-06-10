let likes = 200;
let comments = 475;
console.log("like + comments : ", (likes+comments));


function showDiscountTag(price){
    if (price<500) {
        console.log("Special Discount!");
        
    } else {
        console.log("Regular Price");
        
    }
}
showDiscountTag(487);

function isEligibleForDiscount(amount){
    if (amount>=500) {
        console.log(true);
        
    } else {
        console.log(false);
        
    }
}
isEligibleForDiscount(300);
isEligibleForDiscount(700);

let followers = 1209;

followers>1000?console.log("Verified Creator"):console.log("Regular User");

function getBadge(followers){
    followers>=1000?console.log("Verified Creator ⭐"):console.log("Regular User");
    
}

getBadge(1024);


let isPremiumUser = true;
let hasActiveSubscription= false;

if(isPremiumUser&&hasActiveSubscription){
    console.log("Access Granted");
    
}else{
    console.log("Upgrade Needed");
    
}


let username="Aryan";
// let username="";
// let username=null;

if (username) {
    console.log(`welcome, ${username}`);
    
}else{
    console.log("Guest Login");
    
}

function isTruthy(input){
    input?console.log("truthy"):console.log("falsy");
    
    
}

isTruthy(0);
isTruthy(null);
isTruthy("hello");
isTruthy(42);


function canOrderFood(isLoggedIn, hasPaymentMethod){
    if (isLoggedIn&&hasPaymentMethod) {
        console.log(true);
        
    }
    
}
canOrderFood(true,true)
canOrderFood(true,false)
canOrderFood(false,true)
canOrderFood(false,false)