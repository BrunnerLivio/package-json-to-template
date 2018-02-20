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
    return nunjucks.renderString(template, { packageJson });
}


module.exports = convert2Template;