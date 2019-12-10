var allZucchine = [];
var zucchineMeno15 = [];
var totAllZucchine = 0;
var totZucchineMeno15 = 0;
var totOver15 = 0;

for (var i = 0; i < 10; i++) {
  var weight = getRndInteger(1, 30);
  var single_zucchini =
      {
        "nome" : "zucchina " + [ i + 1 ],
        "lung" : weight
      }
      allZucchine.push(single_zucchini);
      if ( weight < 15 ) {
        zucchineMeno15.push(single_zucchini)
        totZucchineMeno15 += single_zucchini.lung
      }
      totAllZucchine += single_zucchini.lung
      totOver15 = totAllZucchine - totZucchineMeno15;
};

console.log(allZucchine);
console.log(zucchineMeno15);
console.log("total of less 15 cm : " + totZucchineMeno15 + " cm");
console.log("total of over 15 cm : " + totOver15 + " cm");

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};
