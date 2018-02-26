const fs = require('fs');
const path = require('path');
const isObject = require('is-object')

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
 * @param {object} options The options
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

/**
 * Resolves the packageJson(-Path) options and
 * returns the packageJson-content.
 *
 *
 * @param {object} options The options
 * @param {string?} options.packageJsonPath The path to the package JSON file to read from
 * @param {string?} options.packageJson The packageJson file content
 *
 * @returns {object} The parsed package.json content
 */ 
function resolvePackageJson(options) {
    let packageJsonPath = options.packageJsonPath;
    let packageJson = options.packageJson;

    if (!packageJson && !packageJsonPath) {
        throw new Error('No package.json given');
    }

    if (packageJsonPath) {
        packageJson = fs.readFileSync(packageJsonPath, 'utf8');
    }
    
    if (isObject(packageJson)) {
        return packageJson
    } else {
        return JSON.parse(packageJson);
    }
}


/**
 * Checks the given options and resolves them,
 * if necessary
 */
function resolveOptions(options) {
    options.template = resolveTemplate(options);
    options.packageJson = resolvePackageJson(options);
    return options;
}

module.exports = resolveOptions;
