const n = parseFloat(prompt('Enter N = '));
alert('Simple fibonacci = ' + fibonacci(n));
alert('Fibonacci array = ' + fibonacci_arr(n));
alert('Fibonacci rec = ' + fibonacci_rec(n));

function fibonacci(n) {

    let first = 1;
    let second = 1;
    for (i = 3; i <= n; i++) {
        let next = first + second;
        first = second;
        second = next;
    }
    return second;
}

function fibonacci_arr(n) {
    let fibs = [1, 1];
    for (i = 2; i < n; i++) {
        fibs.push(fibs[i - 1] + fibs[i - 2]);
    }
    return fibs[fibs.length - 1];
}

function fibonacci_rec(n) {
    if (n >= 3) {
        return (fibonacci_rec(n - 1) + fibonacci_rec(n - 2));
    }
    else {
        return "Enter n>=2"
    }
}
