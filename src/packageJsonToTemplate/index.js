const fs = require('fs');
const path = require('path');
const resolveOptions = require('./resolveOptions');
const convert2Template = require('./convert2Template');
const resolveDependencies = require('../dependencies/resolveDependencies');
const resolveScripts = require('../packageJson/scripts');

/**
 * @param {object} options Options for the convertor
 */
function PackageJsonToTemplate(options) {
    options = resolveOptions(options);
    return resolveDependencies(options.packageJson)
        .then(packageJson => resolveScripts(packageJson))
        .then(packageJson => convert2Template(packageJson, options.template, options.useBrackets));
}

module.exports = PackageJsonToTemplate;