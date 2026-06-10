let userName = "Aryan";
let followers = 2000;
let isVerified = true;

console.log("user Name : ",userName);
console.log("Followers : ",followers);
console.log("Verified : ",isVerified);


var fav_food_app = "swiggy";
console.log(fav_food_app);
fav_food_app = "zomato";
console.log(fav_food_app);

const MAX_POSTS =100;
console.log(MAX_POSTS);

// MAX_POSTS = 200;
// console.log(MAX_POSTS);
// TypeError: Assignment to constant variable.

const favoriteSongs =["295", "nagar nandjina lal", "dwarikano nath"];
favoriteSongs.push("saiyara");
console.log(favoriteSongs);

//  const prevents reassignment of the variable, not mutation of the array contents

const spotifyProfile={
    "userName" :"Aryan",
    "playlist" :["Happy mix", "safar mix","Daily mix 1","folk mix"],
    "isPremium": true,
}
console.log(spotifyProfile);
console.log(spotifyProfile.playlist[2]);

let user1="Priya";
let user2 = user1;
console.log(user1);
console.log(user2);
user1="Riya";

console.log(user1);
console.log(user2);

let favApps1 = ['Instagram', 'Spotify'];
let favApps2 = favApps1.push('Zomato');
console.log(favApps1);
console.log(favApps2);


let  favFood = 'pizza';
let favFoodCopy = favFood;
console.log(favFood);
console.log(favFoodCopy);
favFood = "burger";
console.log(favFood);
console.log(favFoodCopy);

let city = "ahmadabad";
let zomatoUser = {
    city,
}
console.log(zomatoUser);
console.log(city);
city="Rajkot";
console.log(zomatoUser);
console.log(city);


function showProfile (name, followers,isPremium ){
    console.log(`name is ${name} and followers ${followers}`);
    console.log(typeof(followers));
    
    
}
showProfile("Aryan", 2000, true)

function displayProfile (userName, followers){
    console.log(`${userName} has ${followers} followers`);
    
}
displayProfile("Aryan", 3080);