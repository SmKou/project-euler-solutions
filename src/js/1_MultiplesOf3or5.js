const ans_1 = n => {
    const numbers = [...Array(n).keys()].slice(3);
    for (let i = numbers.length - 1; i > 0; --i)
        if (numbers[i] % 3 != 0 && numbers[i] % 5 != 0)
            numbers.splice(i, 1);
    return numbers;
}
const ans_1_desc = "Create an array populated with values incrementing from 3 to n by 1. Loop through the array backwards, splicing elements that can be divided by 3 and/or 5, then return the array."

const ans_2 = n => {
    const multiples = [];
    for (let i = 1; i < n; i++)
        if (i % 3 == 0 || i % 5 == 0)
            multiples.push(i);
    return multiples;
}
const ans_2_desc = "Create an empty array. Loop from 1 to n, and if the index is divisible by either 3 and/or 5, push the index into the array, then return the array."

const ans_3 = n => {
    const multiples = [];
    for (let i = 1; 3 * i < n; i++)
        multiples.push(3 * i);
    for (let i = 1; 5 * i < n; i++)
        if (5 * i % 3 != 0)
            multiples.push(5 * i);
    return multiples;
}
const ans_3_desc = "Create an empty array. Loop through multiples of 3 until 3 multipled by the index is greater than or equal to n, and push each value into the array, then loop through multiples of 5 until 5 multiplied by the index is greater than or equal to n, but skip that are divisible by three to avoid duplicates. Return the array."

const ans_4 = n => {
    const multiples = [];
    const max_three = Math.floor(n / 3) + 1;
    for (let i = 1; i < max_three; ++i)
        multiples.push(i * 3)

    const max_five = Math.floor(n / 5);
    for (let i = 1; i < max_five; i++) {
        if (!(i % 3))
            continue;
        multiples.push(i * 5);
    }
    return multiples;
}
const ans_4_desc = "Create an empty array. Calculate the number of multiples of 3 to n, exclusive, then loop this number of times and push the result of 3 multiplied by the index into the array. Calculate the number of multiples of 5 to n, exclusive, then loop this number of times and push the result, but if the index is a multiple of 3, do not push, continue. Return the array."

const ans_5 = (n, i = 1, arr = []) => {
    if (i * 3 >= n && i * 5 >= n)
        return arr;
    if (i * 5 < n)
        arr.push(i * 5);
    if (i * 3 < n && i % 5 != 0)
        arr.push(i * 3);
    return ans_5(n, ++i, arr);
}
const ans_5_desc = "On first call, declare defaults: i = 1 and arr = []. On each iteration, check if both the index multiplied by 3 and multiplied by 5 are greater than or equal to n. Then, if the index multiplied by 5 is less than n, push the multiple into the array. If the index multiplied by 3 is less than n and not divisible by 5 as well, push the multiple into the array. Return this function with n, i incremented by 1, and the array."

const MultiplesOf3or5 = {
    problem_name: "Multiples of 3 or 5",
    description: "If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6, and 9. The sum of these multiples is 23.\nFind the sum of all multiples of 3 or 5 below 1000.",
    url: "https://projecteuler.net/problem=1",
    solutions: [ans_1, ans_2, ans_3, ans_4, ans_5],
    logic: [ans_1_desc, ans_2_desc, ans_3_desc, ans_4_desc, ans_5_desc],
    present: (result) => result.join(", "),
    default: 1000,
    check_input_valid: (v) => {
        try {
            const n = parseInt(v);
            if (n < 1)
                return 1000;
            return true;
        }
        catch (err) { return 1000; }
    }
}

export default MultiplesOf3or5;