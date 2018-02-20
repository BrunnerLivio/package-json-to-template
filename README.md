# package-json-to-template

Parses package.json data and prints it in the given template (HTML, LaTeX, etc.)

## Use Case

- Websites
- LaTeX
- Documentations
- Continous Integration
- etc.

## Usage

### CLI

```bash
npm i -g package-json-to-template
package-json-to-template [-t default/latex.template] [--usebrackets] [--tojson]
```

### NodeJS

```javascript
const PackageJsonToTemplate = require('package-json-to-template');

const data = await PackageJsonToTemplate({
    template: `
{% for dependency in packageJson.dependencies %}
((dependency.name))
{% endfor %}
    `,
    packageJsonPath: './package.json',
    useBrackets: true,
    toJson: false
});
```

## Example

See [EXAMPLE.md](EXAMPLE.md)

## Installation

See [INSTALLATION.md](INSTALLATION.md)