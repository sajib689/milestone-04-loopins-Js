const numbers = [5, 32, 7, 11, 88];

for (var i = 0; i < numbers.length; i++) {
    let num = numbers.reverse();
    console.log(num[i]);
}

var num = ['Tom', 'Bob', 'Tinker'];
for (var i = 0; i < num.length; i++) {
   let cut = num[i].split(' , ')
    console.log(cut)

}
var man = 'I am Sajib Hossen';
var reversedMan = man.split('').reverse(function(a,b) {
    b -a 
}).join('');
console.log(reversedMan);

var man = 'I am Sajib Hossen';
var reversedMan = man.split(' ').map(word => word.split('').reverse().join('')).reverse().map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
console.log(reversedMan);
