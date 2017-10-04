// Given the buggy code below:

// var items = ["purchase domain", "install SSL certificate", "deploy site", "celebrate success"];
// for(var i = 0; i < items.length; i++){
//   console.log("Todo:");
//   console.log(i);
// }

// We want the output to be:

// Todo:
// 1: purchase domain
// 2: install SSL certificate
// 3: deploy site
// 4: celebrate success

// Fix the code so it generates the right output.

// FIX IS BELOW ---------------------------------------

var items = ["purchase domain", "install SSL certificate", "deploy site", "celebrate success"];

console.log("Todo:");

for(var i = 0; i < items.length; i++){
  console.log(i + 1 + ': ' + items[i]);
}
