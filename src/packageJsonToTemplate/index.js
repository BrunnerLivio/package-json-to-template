const fs = require('fs');
const path = require('path');
const resolveOptions = require('./resolveOptions');
const npm = require('api-npm');
const convert2Template = require('./convert2Template');

function getDetail(dependencies) {
    return Promise
        .all(Object.entries(dependencies || {})
            .map(dependency =>
                new Promise((resolve, reject) =>
                    npm.getdetails(dependency[0], resolve))));
}

function resolveDependencies(packageJson) {
    const promises = [];
    promises[0] = getDetail(packageJson.dependencies)
        .then(dependencies => packageJson.dependencies = dependencies);
    promises[1] = getDetail(packageJson.devDependencies)
        .then(devDependencies => packageJson.devDependencies = devDependencies);
    return Promise.all(promises).then(() => packageJson);
}

/**
 * @param {object} options Options for the convertor
 */
function PackageJsonToTemplate(options) {
    options = resolveOptions(options);
    return resolveDependencies(options.packageJson)
        .then(packageJson => convert2Template(packageJson, options.template, options.useBrackets));
}

module.exports = PackageJsonToTemplate;