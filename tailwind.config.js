/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'bg-primary': '#0b0d10',
                'card': '#111316',
                'text-primary': '#f0f0f0',
                'text-secondary': '#757a85',
                'accent': '#647a96',
                'border-color': '#1f2229',
            },
            fontFamily: {
                sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
                mono: ['SF Mono', 'Menlo', 'Consolas', 'monospace'],
            },
            spacing: {
                'container-x': '6vw',
            },
            transitionTimingFunction: {
                'smooth': 'cubic-bezier(0.2, 0.0, 0.2, 1)',
                'out-quad': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            },
            fontSize: {
                'hero': 'clamp(2rem, 4vw, 3.5rem)',
            },
            minWidth: {
                'project-card': 'clamp(350px, 45vw, 600px)',
            },
            maxWidth: {
                'container': '1600px',
            },
        },
    },
    plugins: [],
}
