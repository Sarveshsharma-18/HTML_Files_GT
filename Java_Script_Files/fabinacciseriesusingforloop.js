const num = parseInt(prompt("Enter The number In terms:,", ""));
let n1=0; 
let n2=1; 
let nextTerm;
console.log("fabinacci series");
for(i=1; i<=num; i++){
    console.log(n1);
    nextTerm = n1+n2;
    n1 = n2;
    n2 = nextTerm;
}