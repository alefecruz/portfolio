module.exports = (plop) => {
    plop.setGenerator('component', {
        description: 'Create a component',
        prompts: [
            {
                type: 'list',
                name: 'type',
                message: 'What is your component type?',
                choices: ['atom', 'molecules', 'organisms', 'template'],
            },
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name (Ex.: button)?',
            },
        ],
        actions: [
            {
                type: 'add',
                path: '../../src/components/{{type}}/{{kebabCase name}}/{{pascalCase name}}.tsx',
                templateFile: 'templates/Component.tsx.hbs',
            },
            {
                type: 'add',
                path: '../../src/components/{{type}}/{{kebabCase name}}/styles.ts',
                templateFile: 'templates/styles.ts.hbs',
            },
            {
                type: 'add',
                path: '../../src/components/{{type}}/{{kebabCase name}}/interfaces.ts',
                templateFile: 'templates/interfaces.ts.hbs',
            },
            {
                type: 'add',
                path: '../../src/components/{{type}}/{{kebabCase name}}/index.ts',
                templateFile: 'templates/index.ts.hbs',
            },
        ],
    });
};
