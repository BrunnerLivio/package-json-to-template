# package-json-to-template

Parses the package.json (dev-)dependency data and prints it in the given template

## Use Case

- Websites
- LaTeX Templates
- Documentations
- etc.

## Usage

### CLI

```bash
package-json-to-template [-t default/latex.template] [--usebrackets]
```

### NodeJS

```javascript
const PackageJsonToTemplate = require('package-json-to-template');

const data = await PackageJsonToTemplate({
    template: `
{% for backlog in backlogs %}
((backlog.name))
{% endfor %}
    `,
    useBrackets: true
});
```

## Example

See [EXAMPLE.md](EXAMPLE.md)

## Installation

See [INSTALLATION.md](INSTALLATION.md)