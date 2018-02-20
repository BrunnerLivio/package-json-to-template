# Example


## HTML

```bash
package-json-to-template -p ./package.json > index.html
```
## LaTeX

```bash
package-json-to-template -p ./package.json -t default/latex.template --usebrackets > backlog.tex
```

See output in [example-output.tex](https://github.com/BrunnerLivio/package-json-to-template/blob/master/example-output.tex)

## Custom

```bash
package-json-to-template -p ./package.json -t ./my-template.template > backlog.tex
```