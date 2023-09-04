const ans_1 = () => { }
const ans_1_desc = "";

const LargestPrimeFactor = {
    problem_name: "Largest Prime Factor",
    description: "The prime factors of 13195 are 5, 7, 13 and 29.\nWhat is the largest prime factor of the number 600851475143?",
    url: "https://projecteuler.net/problem=3",
    solutions: [ans_1],
    logic: [ans_1_desc],
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