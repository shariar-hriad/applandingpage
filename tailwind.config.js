module.exports = {
    mode: 'jit',
    content: ['./src/**/*.{html,js}'],
    theme: {
        container: {
            center: true,
            padding: '15px',
        },
        extend: {
            backgroundImage: {
                'dot-bg': 'url(./src/img/dot-bg.webp)',
                'price-bg': 'url(./src/img/price.webp)',
            },
        },
    },
    plugins: [],
};
