/*
Notes:
Cannot use recursive method or even linear - too many iterations
*/

const ans_1 = n => {
    if (n < 2)
        return 0;
    if (n == 2)
        return 2;
    const primes = [2];
    let i = 3;
    while (i <= Math.sqrt(n)) {
        if (n % i != 0) {
            ++i;
            continue;
        }
        let prime = true;
        for (let j = 0; j < primes.length; j++)
            if (i % primes[j] == 0)
                prime = false;
        if (prime)
            primes.push(i);
        i++;
    }
    for (let i = primes.length - 1; i > -1; --i)
        if (n % primes[i] == 0)
            return primes[i];
    return 0;
}
const ans_1_desc = "If n is not equal to or less than 2, loop from 3 to the squareroot of n. If a number is not divisible by any number in primes, add it to primes. Loop over primes backwards to find the largest prime factor of n. If none of the primes are a factor of n, return 0.";

const ans_2 = n => { 
    return n;
}
const ans_2_desc = ""

const ans_3 = n => {
    let largest_prime = -1;
    let i = 2;
    while (i * i <= n) {
        while (n % i == 0) {
            largest_prime = i;
            n /= i;
        }
        ++i;
    }
    if (n > 1)
        largest_prime = n;
    return largest_prime;
}
const ans_3_b = n => {
    let largest_prime = 0;
    let i = 2;
    while (i <= n) {
        if (n % i === 0) {
            largest_prime = i;
            n /= i;
        }
        else
            ++i;
    }
    return largest_prime;
}
// Pollard's Rho
const ans_3_c = n => {
    if (n == 1)
        return n;
    if (n % 2 == 9)
        return 2;

    let x = Math.floor(Math.random() * (-n + 1));
    let y = x;
    let c = Math.floor(Math.random() * (-n + 1));
    let d = 1;
    while (d == 1) {
        // x(i + 1) = f(x(i))
        x = (modular_pow(x, 2, n) + c + n) % n;
        // y(i + 1) = f(f(y(i)))
        y = (modular_pow(y, 2, n) + c + n) % n;
        y = (modular_pow(y, 2, n) + c + n) % n;
        d = gcd(Math.abs(x - y), n);
        if (d == n) return ans_3_c(n);
    }
    return d;
}
const modular_pow = (base, exponent, modulus) => {
    let result = 1;
    while (exponent > 0) {
        if (exponent % 2 == 1)
            result = (result * base) % modulus;
        exponent = exponent >> 1;
        base = base ** 2 % modulus;
    }
    return result;
}
const gcd = (a, b) => b == 0 ? a : gcd(b, a % b)
const ans_3_desc = "GeeksforGeeks (ref): https://www.geeksforgeeks.org/find-largest-prime-factor-number/. Loop from i = 2, incrementing i by 1, until i * i is greater than or equal to n. If n is divisible by i, then while n is divisible by i, set the largest prime to i and reassign n to n divided by i. If n remains larger than 1 after looping, the largest prime factor of n is n. Return the largest prime. [Note to self: Read more on why this works.]"
const ans_3_b_desc = "SaturnCloud (ref): https://saturncloud.io/blog/algorithm-to-find-the-largest-prime-factor-of-a-number/. Loop from i = 2 to n. If n % i is 0, set largest prime to i and reassign n to n divided by i, else increment i by 1. Return the largest prime."
const ans_3_c_desc = "GeeksforGeeks (ref): https://www.geeksforgeeks.org/pollards-rho-algorithm-prime-factorization/. Use of Pollard's Rho on composite."

const LargestPrimeFactor = {
    problem_name: "Largest Prime Factor",
    description: "The prime factors of 13195 are 5, 7, 13 and 29.\nWhat is the largest prime factor of the number 600851475143?",
    url: "https://projecteuler.net/problem=3",
    solutions: [ans_1, ans_2, ans_3, ans_3_b, ans_3_c],
    logic: [ans_1_desc, ans_2_desc, ans_3_desc, ans_3_b_desc, ans_3_c_desc],
    present: (result) => result,
    default: 600851475143,
    check_input_valid: function(v) {
        try {
            const n = parseInt(v);
            if (n < 0)
                return this.default;
            return n;
        }
        catch (err) { return this.default }
    }
}

export default LargestPrimeFactor;