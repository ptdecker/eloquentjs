// fizzbuzz.js
//
// Count from 1 to 100 and write 'fizz' to the console when the number is
// divisiable by 3, 'buzz' when divisable by 5, 'fizzbuzz' when divisable by
// both; otherwise, just write the nummber itself.

for (let i = 1; i <= 100; i++) {
    let fb = ""
    if (i % 3 == 0) fb += "fizz"
    if (i % 5 == 0) fb += "buzz"
    console.log(fb || i)
}