let num = 500;
var isprimenumber = true;

for (let i = 2; i < num; i++) {
    if (num % i == 0) {
        isprimenumber = false;

    }


}
if (isprimenumber == true) {
    console.log(`${num} is a prime number`);


}
else {
    console.log(`${num} is a not prime number`);
}