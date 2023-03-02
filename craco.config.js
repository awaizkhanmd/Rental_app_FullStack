module.exports = {
    styles: {
        postcss: {
            Plugin: [
                require('tailwindcss'),
                require('autoprefixer'),
            ],
        },

    },
}