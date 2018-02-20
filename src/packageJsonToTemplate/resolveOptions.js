const fs = require('fs');
const path = require('path');

const DEFAULT_VALUES = {
    TEMPLATE_PATH: 'default/html.template'
};

/**
 * Resolves default-template-paths to real absolute paths.
 * @param {string} templatePath The path which contains 'default'
 * @returns {string} Real useable absolute path of the template
 */
const resolveDefaultTemplate = (templatePath) => templatePath.replace('default/', path.join(__dirname, '../../templates/'))

/**
 * Resolves the template(-path) options and
 * returns the template.
 * @param {object} options The options of TrelloScrumToTemplate
 * @param {string?} options.templatePath The path of the template
 * @param {string?} options.template The template as string
 * 
 * @returns {string} The template file-content 
 */
function resolveTemplate(options) {
    let templatePath = options.templatePath;
    let template = options.template;

    if (!template && !templatePath)
        templatePath = DEFAULT_VALUES.TEMPLATE_PATH;

    if (templatePath) {
        templatePath = resolveDefaultTemplate(templatePath);
        template = fs.readFileSync(templatePath, 'utf8');
    }

    return template;
}

function resolvePackageJson(options) {
    let packageJsonPath = options.packageJsonPath;
    let packageJson = options.packageJson;

    if (!packageJson && !packageJsonPath) {
        throw new Error('No package.json given');
    }

    if (packageJsonPath) {
        packageJson = fs.readFileSync(packageJsonPath, 'utf8');
    }

    return JSON.parse(packageJson);
}


function resolveOptions(options) {
    options.template = resolveTemplate(options);
    options.packageJson = resolvePackageJson(options);
    return options;
}

module.exports = resolveOptions;