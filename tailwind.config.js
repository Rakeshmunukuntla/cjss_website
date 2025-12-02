/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          teal: '#00DDB3',
          blue: '#0066FF',
          purple: '#6C5CE7',
          dark: '#0F172A',
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out forwards',
        fadeInUp: 'fadeInUp 1.2s ease-out forwards',
        slideDown: 'slideDown 1s ease-out forwards',
        slideUp: 'slideUp 1s ease-out forwards 0.2s',
        blob: 'blob 7s infinite',
        float: 'float 6s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        shimmer: 'shimmer 3s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        blink: 'blink 1s ease-in-out infinite',
        bounceIn: 'bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) forwards',
        scaleIn: 'scaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        rotateIn: 'rotateIn 0.8s ease-out forwards',
        parallaxUp: 'parallaxUp 1s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        slideInRight: 'slideInRight 0.8s ease-out forwards',
        slideInLeft: 'slideInLeft 0.8s ease-out forwards',
        fadeInScale: 'fadeInScale 1s ease-out forwards',
        wiggle: 'wiggle 0.8s ease-in-out infinite',
        pulseSlow: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        revealLeft: 'revealLeft 0.9s cubic-bezier(0.23, 1, 0.320, 1) forwards',
        revealRight: 'revealRight 0.9s cubic-bezier(0.23, 1, 0.320, 1) forwards',
        revealUp: 'revealUp 0.9s cubic-bezier(0.23, 1, 0.320, 1) forwards',
        zoomIn: 'zoomIn 0.8s cubic-bezier(0.23, 1, 0.320, 1) forwards',
        textReveal: 'textReveal 0.8s ease-out forwards',
        smoothHover: 'smoothHover 0.3s ease-out',
        gradientShift: 'gradientShift 8s ease-in-out infinite',
        orbFloat: 'orbFloat 8s ease-in-out infinite',
        pulseglow: 'pulseglow 4s ease-in-out infinite',
        breathe: 'breathe 6s ease-in-out infinite',
        scroll: 'scroll 30s linear infinite',
        'scroll-reverse': 'scroll-reverse 30s linear infinite',
        'spin-slow': 'spin 4s linear infinite',
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
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
        },
        float: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0px) translateX(0px)' },
          '25%': { opacity: '0.5', transform: 'translateY(-30px) translateX(20px)' },
          '50%': { opacity: '0.7', transform: 'translateY(-60px) translateX(-20px)' },
          '75%': { opacity: '0.5', transform: 'translateY(-30px) translateX(10px)' },
          '100%': { opacity: '0.3', transform: 'translateY(0px) translateX(0px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(0, 221, 179, 0.3)' },
          '50%': { boxShadow: '0 0 20px rgba(0, 221, 179, 0.6)' },
        },
        blink: {
          '0%, 50%, 100%': { opacity: '1' },
          '25%, 75%': { opacity: '0' },
        },
        bounceIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
          '100%': { transform: 'scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-10deg) scale(0.9)' },
          '100%': { opacity: '1', transform: 'rotate(0) scale(1)' },
        },
        parallaxUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInScale: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(-2deg)' },
          '75%': { transform: 'rotate(2deg)' },
        },
        revealLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px) skewX(10deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) skewX(0)' },
        },
        revealRight: {
          '0%': { opacity: '0', transform: 'translateX(50px) skewX(-10deg)' },
          '100%': { opacity: '1', transform: 'translateX(0) skewX(0)' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(50px)' },
          '50%': { opacity: '0.5' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.8) rotate(-5deg)' },
          '100%': { opacity: '1', transform: 'scale(1) rotate(0)' },
        },
        textReveal: {
          '0%': { opacity: '0', clipPath: 'inset(0 100% 0 0)' },
          '100%': { opacity: '1', clipPath: 'inset(0 0 0 0)' },
        },
        gradientShift: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.4' },
          '33%': { transform: 'translate(40px, -60px) scale(1.1)', opacity: '0.6' },
          '66%': { transform: 'translate(-40px, 60px) scale(0.9)', opacity: '0.5' },
        },
        pulseglow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 221, 179, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 221, 179, 0.6)' },
        },
        breathe: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.95' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-50% - 24px))' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(calc(50% + 24px))' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      transitionDelay: {
        0: '0ms',
        2000: '2000ms',
        4000: '4000ms',
      },
      animationDelay: {
        0: '0ms',
        100: '100ms',
        200: '200ms',
        300: '300ms',
        500: '500ms',
        700: '700ms',
        1000: '1000ms',
        2000: '2000ms',
        4000: '4000ms',
      },
    },
  },
  plugins: [],
}
