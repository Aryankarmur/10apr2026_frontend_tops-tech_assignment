// 1,2
let favApps = ["instagram", "youtube", "google pay", "spotify", "netflix"];

for (let i = 0; i < favApps.length; i++) {
  console.log(favApps[i]);
}

// 3
let playlist = [
  "saiyaara",
  "qafirana",
  "namo namo",
  "dev dwarikavado",
  "shivaji nu halardu",
];

for (let i = 0; i < playlist.length; i++) {
  console.log(playlist[i]);
}

// 4,5
let cricket_teams = ["gt", "rcb", "csk", "mi", "lsg", "kkr", "srh"];
for (let i = 0; i < cricket_teams.length; i++) {
  console.log(cricket_teams[i].toUpperCase());
}

// 6
let insta_username = [
  "aryan_ahir",
  "shreyansh_vada",
  "vishal_ahir0231",
  "yatharth093",
];
let i = 0;
while (i < insta_username.length) {
  console.log(insta_username[i].toUpperCase());
  i++;
}


// 7,8
// let playlist = ["saiyaara", "qafirana", "namo namo", "dev dwarikavado", "shivaji nu halardu"];

let p = 0;
do {
  console.log(`${p} : ${playlist[p]}`);
  p++;
} while (p < playlist.length);


// 9
const orderStatuses = ["Preparing", "Out for delivery", "Delivered"];

let index = 0;

do {
  console.log(`Order status: ${orderStatuses[index]}`);
  index++;
} while (index < orderStatuses.length);


// 10,11
let flipkart_products = [{"name":"laptop", "price":50000}, {"name":"mobile","price":20000}, {"name":"watch","price":350}, {"name":"snickers","price":2000}]

for (const item of flipkart_products) {
    console.log(item.name);
    
}

// 12
let flip_price = [1200, 334, 1318, 136, 47656, 345];
let total = 0;
for (const price of flip_price) {
    total = total + price;
    
}
console.log(total);

// 13,14

let whats_name = ["aryan", "jay", "vijay", "ramesh", "raghav"];

whats_name.forEach((name)=>{
  console.log(`Sending hi to ${name} on WhatsApp!`);
  
})

// 15
let crick_teams = ["mi", "gt", "csk", "kkr", "lsg", "rcb"];

crick_teams.forEach((team)=>{
  console.log(`Go ${team.toUpperCase()}!`);
  
})