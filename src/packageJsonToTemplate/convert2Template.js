const nunjucks = require('nunjucks');

function convert2Template(packageJson, template, useBrackets) {
    let tags;
    if (useBrackets) {
        tags = {
            variableStart: '((',
            variableEnd: '))'
        };
    }
    nunjucks.configure({ autoescape: true, tags });
    console.log(JSON.stringify({ packageJson }));
    // return nunjucks.renderString(template, { packageJson });
    return '';
}


module.exports = convert2Template;