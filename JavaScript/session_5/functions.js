//  1,2
let body = document.querySelector("body");

function createSpotifyButton(label, color) {

        let btn = document.createElement("button");
        btn.textContent = label;
        btn.style.backgroundColor=color;

        body.appendChild(btn);

}

createSpotifyButton("Spotify", "yellow");

// 3

const getGreeting = function greet(name) {
  return `Hello, ${name}`;
};

console.log(getGreeting("Aryan"));

// 4,5

const getDiscountedPrice = function discount(price, discount) {
  let disc_price = (price * discount) / 100;

  let discountedprice = price - disc_price;

  return discountedprice;
};

console.log(getDiscountedPrice(2980, 17));

// 6

const formatFollowers = (follownum) => {
  if (follownum >= 1000000) {
    return (follownum / 1000000).toFixed(1) + "M";
}

  if (follownum >= 1000) {
    return (follownum / 1000).toFixed(1) + "K";
}
  return follownum.toString();
};
console.log(formatFollowers(6748));

// 7,8
// const formatFollowers = (count) => {
//     if (count >= 1000) {
//     return (count / 1000).toFixed(1) + "K";
//   }
//   return count;
// };

// 9

  function createLikeButton(label, color) {
  
          let btn = document.createElement("button");
          btn.textContent = label;
          btn.setAttribute(
            "style", "border: 2px solid black; border-radius:5px;"
          )
          btn.style.backgroundColor=color;
  
          body.appendChild(btn);
          
        }
        
        createLikeButton("click me!", "blue");

//   10,11
function showMenuItem(name, price){
    let div = document.createElement("div");
    let p_name = document.createElement("p");
    p_name.textContent = name;
    let p_price = document.createElement("p");
    p_price.textContent= price;
    
    div.append(p_name, p_price);

    body.appendChild(div);
}
showMenuItem("burger", 99);
showMenuItem("pizza", 93);
showMenuItem("cola", 20);

// 12

const  double = (x)=> { return x * 2; }
console.log(double(7));


// 13

function createPlaylistButton(songName, themeColor){
    
    let btn = document.createElement("button");
    btn.textContent = songName;
    btn.style.backgroundColor=themeColor;
    
    body.appendChild(btn);
}

createPlaylistButton("Qafirana", "aqua");
createPlaylistButton("tere nam", "green");
createPlaylistButton("namo namo", "yellow");
createPlaylistButton("295", "red");