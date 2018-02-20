#!/usr/bin/env node

const program = require('commander');
// @ts-ignore
const packageJson = require('../package.json');
const PackageJsonToTemplate = require('./index');

function main() {
    program
        .version(packageJson.version)
        .option('-p --packageJson <packageJson>', 'The path to the package.json file')
        .option('-t --template <template>', 'the template path')
        .option('--usebrackets', 'If the given jinja template uses double brackets for variables, instead of double curly braces')
        .parse(process.argv);


    PackageJsonToTemplate({
        templatePath: program.template,
        useBrackets: program.usebrackets,
        packageJsonPath: program.packageJson
    })
        .then(data => console.log(data))
        .catch(err => console.error(err));
}

main();