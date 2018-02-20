// Type definitions for package-json-to-template 1.0.0
// Project: https://github.com/BrunnerLivio/package-json-to-template
// Definitions by: Livio Brunner <https://github.com/BrunnerLivio>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * Options for Trello Scrum To Template
 */
interface PackageJsonOptions {
        packageJson: string,
        /**
         * A custom jinja 2 template string
         */
        template?: string,
        /**
         * The path to the template. 
         * 
         * Use default/latex.template for default LaTeX output 
         * Use default/html.template for default HTML output
         */
        templatePath?: string,
        /**
         * If it should use normal brackets "(( variable ))", instead of
         * curly brackets "{{ variable }}" in the template.
         * 
         * For example for LaTeX templates 
         */
        useBrackets?: boolean
}

/**
 * Reads data from the given packagejson path and returns the data in the 
 * configured template
 * @param options Templating options
 */
declare function TrelloScrumToTemplate(options: PackageJsonOptions): Promise<string>;