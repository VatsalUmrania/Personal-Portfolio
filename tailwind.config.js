/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Linear-style dark theme palette
                bg: {
                    primary: '#0B0E14', // Rich dark, not pitch black
                    secondary: '#151921',
                    surface: '#1D222C',
                },
                text: {
                    primary: '#F7F8F8',
                    secondary: '#8A8F98',
                    tertiary: '#575C66',
                },
                border: {
                    subtle: 'rgba(255, 255, 255, 0.08)',
                    focus: 'rgba(255, 255, 255, 0.16)',
                },
                accent: {
                    glow: '#5E6AD2', // Subtle purple/blue glow
                    DEFAULT: '#D2D5DA',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                mono: ['JetBrains Mono', 'SF Mono', 'Menlo', 'monospace'], // Suggestion: Use JetBrains if possible
            },
            backgroundImage: {
                'subtle-gradient': 'linear-gradient(to bottom right, rgba(255,255,255,0.03), transparent)',
            }
        },
    },
    plugins: [],
}