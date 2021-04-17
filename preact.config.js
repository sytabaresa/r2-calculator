module.exports = (config, env, helpers, params = defaultParams) => {
    require('preact-cli-plugin-env-vars')(config, env, helpers);

    // config.node.process = 'mock';
    // config.node.Buffer = true;

    const purgecss = require('@fullhuman/postcss-purgecss')({
        // Specify the paths to all of the template files in your project
        content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
        // Include any special characters you're using in this regular expression
        defaultExtractor: content => {
            // Capture as liberally as possible, including things like `h-(screen-1.5)`
            const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []

            // Capture classes within other delimiters like .block(class="w-1/2") in Pug
            const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []

            return broadMatches.concat(innerMatches)
        }
    });
    const postCssLoaders = helpers.getLoadersByName(config, 'postcss-loader');
    postCssLoaders.forEach(({ loader }) => {
        const plugins = loader.options.plugins;
        // Add tailwind css at the top.
        plugins.unshift(require('tailwindcss')('./tailwind.config.js'));
        plugins.push(require('autoprefixer'))

        // Add PurgeCSS only in production.
        if (env.production) {
            plugins.push(purgecss);
        }
    });

    const publicPath = "/" + require('git-repo-name').sync() + '/';
    // const publicPath = ''

    config.output = config.output || {};
    if (process.env.NODE_ENV === 'gh-pages') {
        config.output.publicPath = publicPath;
        // config.output.publicUrl = env.pkg.homepage || '/'
    }

    return config;
};