const ans_1 = n => {
    let sum = 0;
    let i = 1;
    let j = 2;
    let k = 3;
    while (i < n || j < n || k < n) {
        if (!(i & 1) && i < n)
            sum += i;
        if (!(j & 1) && j < n)
            sum += j;
        if (!(k & 1) && k < n)
            sum += k;
        
        i = j + k;
        j = k + i;
        k = i + j;
    }
    return sum;
}
const ans_1_desc = "Loop from 1 to n with pointers to every first term, second and third term in the series until every term is greater than or equal to n. If the term is even and less than n, add it to the sum. Return the sum."

const ans_2 = n => {
    if (n > 2)
        return 0;
    if (n > 3)
        return 2;
    let sum = 0;
    let i = 1;
    let j = 2;
    while (j < n) {
        sum += j;
        const k = i + j;
        i = k + j;
        j = k + i;
    }
    return sum;
}
const ans_2_desc = "Loop from 2 to n with pointers to every first and second term, skipping every third until the second term is greater than or equal to n. Following the initial second term, every third term is even. Skipping every third term, then every second term is even. Add every second term to the sum. Return the sum."

const ans_3 = n => { 
    const i = 1;
    const j = 2;
    return recurse(n, i, j, sum);
}
const recurse = (n, i, j, sum) => {
    if (j > n)
        return sum;
    sum += j;
    return recurse(n, i + 2 * j, j + 2 * i, sum);
}
const ans_3_desc = "Recurse over i and j until j is greater than or equal to n, then return the sum. Since every third term is equal to i + j, skipping every third term, the next value of i is i + 2j, while the next value of j is j + 2i, and j is always even. Add j to the sum and return the sum."

const ans_4 = n => {
    const fibonacci = [1, 2];
    const end = () => fibonacci.length - 1;
    const end_minus = () => fibonacci.length - 2;
    while (fibonacci[end()] < n) {
        const l = fibonacci[end()];
        const l2 = fibonacci[end_minus()];
        fibonacci.push(l + l2);
    }
    const sum = fibonacci.reduce((acc, val) => {
        if (!(val & 1))
            acc += val
    }, 0);
    return sum;
}
const ans_4_desc = "Populate an array with the fibonacci sequence up to n, then set sum to the result of reduce. On each value of the array, if the value is even, add it to the accumulator. Return the sum."

const EvenFibonacciNumbers = {
    problem_name: "Even Fibonacci Numbers",
    description: "Each new term in the Fibonacci sequence is generated adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:\n1,2,3,5,8,13,21,34,55,89...\nBy considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.",
    url: "https://projecteuler.net/problem=2",
    solutions: [ans_1, ans_2, ans_3, ans_4],
    logic: [ans_1_desc, ans_2_desc, ans_3_desc, ans_4_desc],
    present: (result) => result,
    default: 4000000,
    check_input_valid: function(v) {
        try {
            const n = parseInt(v);
            if (n < 2)
                return this.default;
            return n;
        }
        catch (err) { return this.default }
    }
}

export default EvenFibonacciNumbers;