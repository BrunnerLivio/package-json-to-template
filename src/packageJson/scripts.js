function resolveScripts(packageJson) {
    packageJson.scripts = Object.entries(packageJson.scripts).map(script => ({ name: script[0], exec: script[1] }));
    return packageJson;
}

module.exports = resolveScripts;