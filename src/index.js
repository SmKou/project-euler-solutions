import './css/fonts.css';
import './css/styles.css';

// Refer variables from .env => ${process.env.varName}
import Mult3or5 from './js/1_Mult3or5';

const euler_problems = new Map();
euler_problems.set("Mult3or5", Mult3or5);

const problems_select = document.getElementById('problems');
const user_input = document.getElementById('user_input')
const solutions_section = document.getElementById('solutions');

problems_select.addEventListener('change', () => {
    const problem = problems_select.value;
    if (!problem)
        return;
    const euler_problem = euler_problems.get(problem);

    const intro_div = document.createElement('div');
    intro_div.id = "intro";
    const h3 = document.createElement('h3');
    h3.append(document.createTextNode(euler_problem.problem_name));
    intro_div.append(h3);
    const p = document.createElement('p');
    p.append(document.createTextNode(euler_problem.description));
    p.append(document.createElement('br'));
    const a = document.createElement('a');
    a.href = euler_problem.url;
    a.target = "_blank";
    a.append(document.createTextNode('Project Euler: ' + euler_problem.problem_name));
    p.append(a);
    intro_div.append(p);
    solutions_section.append(intro_div);

    const input_value = user_input.value;
    const input = input_value ? euler_problem.check_input_value(input_value) : euler_problem.default;
    
    const solutions = euler_problem.solutions;
    for (let i = 0; i < solutions.length; i++) {
        const start = performance.now();
        const result = solutions[i](input);
        const stop = performance.now();

        const div = document.createElement('div');
        const p_ttl = document.createElement('p');
        p_ttl.style.fontWeight = "bold";
        p_ttl.append(document.createTextNode(`Solution ${i + 1}:`));
        const p_desc = document.createElement('p');
        p_desc.append(document.createTextNode(euler_problem.logic[i]));
        p_desc.append(document.createElement('br'));
        p_desc.append(document.createTextNode(`Time: ${stop - start} ms`));
        const details_res = document.createElement('details');
        const summary = document.createElement('summary');
        summary.append(document.createTextNode('Result'));
        details_res.append(summary);
        details_res.append(document.createTextNode(euler_problem.present(result)));
        div.append(p_ttl);
        div.append(p_desc);
        div.append(details_res);
        solutions_section.append(div);
    }
});

