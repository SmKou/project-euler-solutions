# Project Euler Solutions

By: Stella Marie

View on [Github Pages](https://smkou.github.io/project-euler-solutions/)

## **Technologies Used**

- HTML5
- CSS3
- Skeleton 2.0.4 by Dave Gamache
- Node.js
  - Webpack
  - ESLint
  - Jest, Jest-Each
  - Babel

## **Description**

Project Euler Solutions is an ongoing project to produce solutions to project euler archive problems. For every problem, I try to come up with as many solutions as I can at the moment.

## **Complete Setup**

### **Change imports, exports and component files and tests**

Component.js is just a sample. Rename it and use it to contain just the logic of a single component. Components can be seen as handlers of an object, feature, or state.

Component.test.js is just a sample with a single test and describe. Each component should have a corresponding test file with the same name, but with an extension of .test.js, and the test file should only test the functionality of its corresponding component. Make sure you're importing what is needed for it to run.

## **Features**

To run the test suite, use the command ```npm run test``` in the terminal. You can also use ```npx jest```.

To create the production ready code for your project, use the command ```npm run build``` in the terminal.

To build and preview your project, use either ```npm run start``` or ```npm start``` in the terminal.

## **Rendering**

Before publishing your website, app, or api, delete the rules in .eslintrc, "no-console": "off" and "no-unused-vars": "off", then run ```npm run lint```

**Github Pages**

```bash
git add .
git commit -m "Save final changes"
git push origin main
git checkout -b gh-pages
git push origin gh-pages
```

**To update Github Pages**

```bash
git add .
git commit -m "Save changes in main"
git push origin main
git checkout gh-pages
git merge main
git push origin gh-pages
```

### **How to render from dist/**

1. Remove dist/ from .gitignore

2.  
```bash
git add dist
git commit -m "Initial dist subtree commit"
```

3.  
```bash
git subtree push --prefix dist origin gh-pages
```

## **Known Bugs**

Please report any issues in using this template.

## **License**

[MIT](https://choosealicense.com/licenses/mit/)

Copyright (c) 2023 Sm Kou
