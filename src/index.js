import './css/fonts.css';
import './css/styles.css';

// Refer variables from .env => ${process.env.varName}
import Mult3or5 from './js/1_Mult3or5';

const euler_problems = new Map();
euler_problems.set("Mult3or5", Mult3or5);

const problems_select = document.getElementById('problems');
const user_input = document.getElementById('user_input')
const solutions_section = document.getElementById('solutions');

problems_select.addEventListener('change', e => {
    const problem = e.value;
    const euler_problem = euler_problems.get(problem);

    const intro_div = document.createElement('div');
    intro_div.id = "intro";
    const h3 = document.createElement('h3');
    h3.append(document.createTextNode(euler_problem.problem_name));
    intro_div.append(h3);
    const p = docucment.createElement('p');
    p.append(document.createTextNode(euler_problem.description));
    const a = document.createElement('a');
    a.href = euler_problem.url;
    a.target = "_blank";
    a.append(document.createTextNode('Project Euler: ' + euler_problem.problem_name));
    p.append(a);
    intro_div.append(p);
    solutions_section.append(intro_div);

    const input_value = user_input.value;
    const input = input ? euler_problem.check_input_value(input_value) : euler_problem.default;
    
    const solutions = euler_problem.solutions;
    for (let i = 0; i < solutions.length; i++) {
        const start = performance.now();
        const result = solutions[i](input);
        const stop = performance.now();

        const div = document.createElement('div');
        const p_ttl = document.createElement('p');
        p_ttl.append(document.createTextNode(`Solution ${i}:`));
        const p_desc = document.createElement('p');
        p_desc.append(document.createTextNode(euler_problem.logic[i]));
        p_desc.append(document.createElement('br'));
        p_desc.append(document.createTextNode(`Time: ${stop - start} ms`));
        const p_res = document.createElement('p');
        p_res.append(document.createTextNode(euler_problem.present(result)));
        div.append(p_ttl);
        div.append(p_desc);
        div.append(p_res);
        solutions_section.append(div);
    }
});

