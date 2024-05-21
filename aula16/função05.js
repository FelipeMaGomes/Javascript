// RECURSIVIDADE
function fatorial(x) {
    if (x == 1) {
        return 1
    } else {
        return x * fatorial(x-1)
    }
}

console.log(fatorial(5))

/*

5! = 5 . 4 . 3 . 2 . 1
5! = 5 . 4!

x! = x . (x-1)!

*/