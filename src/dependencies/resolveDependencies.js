const npm = require('api-npm');
const resolveUsers = require('./users');

function getDetail(dependencies) {
    return Promise
        // @ts-ignore
        .all(Object.entries(dependencies || {})
            .map(dependency =>
                new Promise((resolve, reject) =>
                    npm.getdetails(dependency[0], resolve))));
}

function resolveDependencies(packageJson) {
    const promises = [];
    promises[0] = getDetail(packageJson.dependencies);
    promises[1] = getDetail(packageJson.devDependencies);

    return Promise.all(promises)
        .then(dependencies => {
            dependencies = dependencies.map(dependency => resolveUsers(dependency));
            packageJson.dependencies = dependencies[0];
            packageJson.devDependencies = dependencies[1];
            return packageJson;
        });
}

module.exports = resolveDependencies;