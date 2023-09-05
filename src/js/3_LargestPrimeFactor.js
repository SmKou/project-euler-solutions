const ans_1 = n => {
    if (n < 2)
        return 0;
    if (n == 2)
        return 2;
    const primes = [2];
    let i = 3;
    while (i <= Math.sqrt(n)) {
        for (let j = 0; j < primes.length; j++)
            if (i % primes[j] == 0) {
                i++;
                continue;
            }
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
    const stack = recurse(n);
    while (stack.length > 0) {
        if (n % stack[stack.length - 1] == 0)
            return stack.pop();
        stack.pop();
    }
    return 0;
}
const recurse = (n, k = 2, stack = []) => {
    if (k > Math.sqrt(n))
        return stack;
    let prime = true;
    for (let i = 0; i < stack.length; ++i)
        if (k % stack[i] == 0)
            prime = false;
    if (prime)
        stack.push(k);
    return recurse(n, ++k, stack);
}
const ans_2_desc = "Use a recursive function to find all primes from 2 to the squareroot of n. Loop through the primes backwards until either the stack is empty or n is divisible by a prime. Return the popped element, or pop the last element from the stack. If the stack reaches 0, there are no prime factors, return 0."

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
const ans_3_desc = 'GeeksforGeeks: <a href="https://www.geeksforgeeks.org/find-largest-prime-factor-number/">Find the Largest Prime Factor</a>. Loop from i = 2, incrementing i by 1, until i * i is greater than or equal to n. If n is divisible by i, then while n is divisible by i, set the largest prime to i and reassign n to n divided by i. If n remains larger than 1 after looping, the largest prime factor of n is n. Return the largest prime. [Note to self: Read more on why this works.]'

const LargestPrimeFactor = {
    problem_name: "Largest Prime Factor",
    description: "The prime factors of 13195 are 5, 7, 13 and 29.\nWhat is the largest prime factor of the number 600851475143?",
    url: "https://projecteuler.net/problem=3",
    solutions: [ans_1, ans_2, ans_3],
    logic: [ans_1_desc, ans_2_desc, ans_3_desc],
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