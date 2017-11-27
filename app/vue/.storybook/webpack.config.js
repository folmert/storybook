const path = require('path');

const genDefaultConfig = require('@storybook/vue/dist/server/config/defaults/webpack.config.js');
const svgoConfig = require('../svgo-config.json');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir);
}

module.exports = (baseConfig, env) => {
    const config = genDefaultConfig(baseConfig, env);

    config.module.rules.push({
        test:    /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
        include: path.resolve(__dirname, '../src/styles'),
    });

    config.resolve.alias['vue$'] = 'vue/dist/vue.esm.js';
    config.resolve.alias['@'] = resolve('src');
    config.module.rules[4].exclude = path.resolve(__dirname, '../src/assets/svg-icons'); // prevent having 2 rules for svg

    config.module.rules.push({
        test:    /\.svg$/,
        include: [path.resolve(__dirname, '../src/assets/svg-icons')],
        use:     [
            {
                loader:  'svg-sprite-loader',
                options: {
                   extract:        true,
                   spriteFilename: 'icons.svg'
                }
            },
            {
                loader:  'svgo-loader',
                options: svgoConfig,
            },
        ],
    });

   config.plugins.push(new SpriteLoaderPlugin());

   return config;
};