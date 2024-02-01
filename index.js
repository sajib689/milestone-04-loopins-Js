const friends = ['Elon', 'Bill', 'Mark', 'Waren']

for (const friend of friends) {
    console.log(friend)
}

for (let i = 0; i < friends.length; i++) {
    console.log(friends[i])
    console.log([i])
}
const numbers = [3, 2, 1, 0, 44, 1]
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i])
}
let i = 0
while (i > friends.length) {
    console.log(friends[i])
}