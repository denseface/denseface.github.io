function sum(){
    let total = 0;
    for (let x of arguments)
        total += x;
    return total;
}

console.log(sum(1,2,3,4,5,56));
