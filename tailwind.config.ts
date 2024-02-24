import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './shared/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        fontFamily: {
            michroma: ['Michroma', 'Mulish'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            colors: {
                primary: {
                    100: '#F2F2F2',
                    300: '#DBDBDB',
                    500: '#C2C2C2',
                    700: '#3D3D3D',
                    900: '#1F1F1F',
                },
                secondary: {
                    100: '#477EAE',
                    500: '#2691EE',
                },
                tertiary: '#0F0905',
            },
        },
    },
    plugins: [],
    darkMode: 'selector',
};
export default config;
