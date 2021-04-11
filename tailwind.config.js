module.exports = {
    purge:  {
        enabled: true,
        content: ['./dist/**/*.html'],
    },
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                'primary': '#474747',
            },
            fonts: {
                'sans': ['Open-Sans', 'sans-serif'],
            },
            screens: {
                'sm': {'min': '300px', 'max': '529px'},
                'md': {'min': '530px', 'max': '719px'},
                'lg': {'min': '720px', 'max': '860px'},
                'xl': {'min': '861px', 'max': '100vw'},
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [require('tailwind-hamburgers')],
}
