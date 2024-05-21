function fatorial(r) {
    let fat = 1
    for(let c = r; c > 1; c--) {
        fat *= c
    }
    return fat
}
console.log(fatorial(9))

// 5! = 5 . 4 . 3 . 2 . 1 = 120