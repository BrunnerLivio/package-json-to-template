const packageJsonToTemplate = require('../src');
const assert = require('assert');
describe('Check packageJsonToTemplate', () => {
    it('should inject the name of the package into the template', done => {
	packageJsonToTemplate({
            template: `{{ packageJson.name }}`,
	    packageJson: { name: 'Hello' }
	})
	.then(data => {
            assert.equal(data, 'Hello');
	    done();
	})
	.catch(err => console.error(err));
    });

    it('should resolve the dependencies and inject it into the template', done => {
	packageJsonToTemplate({
	    template: `{% for dependency in packageJson.dependencies %}{{ dependency.name }}{% endfor %}`,
            packageJson: { dependencies: { 'is-object': '1.0.0' }}
        })
	.then(data => {
	    assert.equal(data, 'is-object');
	    done();
	})
	.catch(err => console.error(err));
    });

    it('should resolve scripts-object to an array', done => {
	packageJsonToTemplate({
	    template: `{% for script in packageJson.scripts %}{{ script.name }}:{{ script.exec }};{% endfor %}`,
	    packageJson: { scripts: { dev: 'webpack', start: 'node src/index.js' }}
        }) 
	.then(data => {
	    assert.equal(data, 'dev:webpack;start:node src/index.js;');
	    done(); 
	})
	.catch(err => console.error(err));  		
    });
});
