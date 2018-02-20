# Example


## HTML

```bash
package-json-to-template -p ./package.json > example.html
```

See output in [example.html](https://github.com/BrunnerLivio/package-json-to-template/blob/master/output/example.html)

## LaTeX

```bash
package-json-to-template -p ./package.json -t default/latex.template --usebrackets > example.tex
```

See output in [example.tex](https://github.com/BrunnerLivio/package-json-to-template/blob/master/output/example.tex) or [example.tex.pdf](https://github.com/BrunnerLivio/package-json-to-template/blob/master/output/example.tex.pdf)

## Custom

```bash
package-json-to-template -p ./package.json -t ./my-template.template > output
```

## Debugging

Prints the object, which will be given to the template, as JSON.

```bash
package-json-to-tempalte -p ./package.json --tojson
```