/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a',
            950: '#172554',
          },
          accent: {
            50: '#ecfdf5',
            100: '#d1fae5',
            200: '#a7f3d0',
            300: '#6ee7b7',
            400: '#34d399',
            500: '#10b981',
            600: '#059669',
            700: '#047857',
            800: '#065f46',
            900: '#064e3b',
            950: '#022c22',
          },
          dark: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'fade-in-up': 'fadeInUp 0.6s ease-out',
          'fade-in-down': 'fadeInDown 0.6s ease-out',
          'fade-in-left': 'fadeInLeft 0.6s ease-out',
          'fade-in-right': 'fadeInRight 0.6s ease-out',
          'slide-up': 'slideUp 0.6s ease-out',
          'slide-down': 'slideDown 0.6s ease-out',
          'slide-left': 'slideLeft 0.6s ease-out',
          'slide-right': 'slideRight 0.6s ease-out',
          'scale-in': 'scaleIn 0.5s ease-out',
          'scale-out': 'scaleOut 0.5s ease-out',
          'rotate-in': 'rotateIn 0.6s ease-out',
          'bounce-in': 'bounceIn 0.6s ease-out',
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'wiggle': 'wiggle 1s ease-in-out infinite',
          'typewriter': 'typewriter 2s steps(20) infinite',
          'gradient-x': 'gradient-x 3s ease infinite',
          'gradient-y': 'gradient-y 3s ease infinite',
          'spin-slow': 'spin 3s linear infinite',
          'ping-slow': 'ping 3s cubic-bezier(0, 0, 0.2, 1) infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInDown: {
            '0%': { opacity: '0', transform: 'translateY(-30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInLeft: {
            '0%': { opacity: '0', transform: 'translateX(-30px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          fadeInRight: {
            '0%': { opacity: '0', transform: 'translateX(30px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideUp: {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          slideDown: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          slideLeft: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slideRight: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          scaleIn: {
            '0%': { opacity: '0', transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
          scaleOut: {
            '0%': { opacity: '1', transform: 'scale(1)' },
            '100%': { opacity: '0', transform: 'scale(0.9)' },
          },
          rotateIn: {
            '0%': { opacity: '0', transform: 'rotate(-180deg) scale(0.5)' },
            '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' },
          },
          bounceIn: {
            '0%': { opacity: '0', transform: 'scale(0.3)' },
            '50%': { opacity: '1', transform: 'scale(1.05)' },
            '70%': { transform: 'scale(0.9)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          glow: {
            '0%': { 
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)' 
            },
            '100%': { 
              boxShadow: '0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(59, 130, 246, 0.4)' 
            },
          },
          wiggle: {
            '0%, 100%': { transform: 'rotate(-3deg)' },
            '50%': { transform: 'rotate(3deg)' },
          },
          typewriter: {
            '0%': { width: '0' },
            '100%': { width: '100%' },
          },
          'gradient-x': {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'left center'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'right center'
            },
          },
          'gradient-y': {
            '0%, 100%': {
              'background-size': '200% 200%',
              'background-position': 'center top'
            },
            '50%': {
              'background-size': '200% 200%',
              'background-position': 'center bottom'
            },
          },
        },
        backdropBlur: {
          xs: '2px',
          '3xl': '64px',
        },
        borderRadius: {
          '4xl': '2rem',
          '5xl': '3rem',
        },
        spacing: {
          '18': '4.5rem',
          '88': '22rem',
          '128': '32rem',
        },
        fontSize: {
          '2xs': '0.625rem',
          '6xl': '3.75rem',
          '7xl': '4.5rem',
          '8xl': '6rem',
          '9xl': '8rem',
        },
        lineHeight: {
          'extra-loose': '2.5',
          '12': '3rem',
        },
        maxWidth: {
          '8xl': '88rem',
          '9xl': '96rem',
        },
        zIndex: {
          '60': '60',
          '70': '70',
          '80': '80',
          '90': '90',
          '100': '100',
        },
        perspective: {
          '500': '500px',
          '1000': '1000px',
          '2000': '2000px',
        },
        transformOrigin: {
          'center-center': 'center center',
        },
        rotate: {
          '360': '360deg',
        },
        scale: {
          '102': '1.02',
          '103': '1.03',
        },
      },
    },
    plugins: [
      function({ addUtilities, addComponents, theme }) {
        addUtilities({
          '.perspective-500': {
            perspective: '500px',
          },
          '.perspective-1000': {
            perspective: '1000px',
          },
          '.perspective-2000': {
            perspective: '2000px',
          },
          '.transform-gpu': {
            transform: 'translate3d(0, 0, 0)',
          },
          '.backface-hidden': {
            'backface-visibility': 'hidden',
          },
          '.rotate-y-180': {
            transform: 'rotateY(180deg)',
          },
          '.rotate-x-180': {
            transform: 'rotateX(180deg)',
          },
        });
  
        addComponents({
          '.btn-gradient-primary': {
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 25px rgba(59, 130, 246, 0.4)',
            }
          },
          '.btn-gradient-secondary': {
            background: 'linear-gradient(135deg, #10b981 0%, #047857 100%)',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            fontWeight: '600',
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(135deg, #047857 0%, #065f46 100%)',
              transform: 'translateY(-2px)',
              boxShadow: '0 10px 25px rgba(16, 185, 129, 0.4)',
            }
          }
        });
      }
    ],
  }
  