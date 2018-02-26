#!/usr/bin/env node
const packageJsonToTemplate = require('../src/index');
const fs = require('fs');
const path = require('path');

packageJsonToTemplate({
    packageJsonPath: path.join(__dirname, '../package.json'),
    templatePath: 'default/latex.template',
    useBrackets: true
})
.then(data => {
    fs.writeFileSync(path.join(__dirname, '../output/example.tex'), data); 
})
.catch(err => console.error(err));

packageJsonToTemplate({
    packageJsonPath: path.join(__dirname, '../package.json'),
    templatePath: 'default/html.template'
})
.then(data => {
    fs.writeFileSync(path.join(__dirname, '../output/example.html'), data); 
})
.catch(err => console.error(err));


