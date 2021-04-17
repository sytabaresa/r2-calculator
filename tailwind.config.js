module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                principal: '#FB8827',
                back: '#ECECEC'
            }
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}