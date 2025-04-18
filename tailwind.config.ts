
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#0a6e77',
					foreground: '#ffffff',
					50: '#e0f2f3',
					100: '#b3dde1',
					200: '#80c7cd',
					300: '#4db1b9',
					400: '#269fa9',
					500: '#0a6e77',
					600: '#09636b',
					700: '#07505a',
					800: '#064048',
					900: '#043037'
				},
				secondary: {
					DEFAULT: '#ff7c5e',
					foreground: '#ffffff',
					50: '#fff0ed',
					100: '#ffd7d0',
					200: '#ffbeb0',
					300: '#ffa490',
					400: '#ff8b70',
					500: '#ff7c5e',
					600: '#e66e55',
					700: '#cc6049',
					800: '#b3533e',
					900: '#994633'
				},
				accent: {
					DEFAULT: '#ffd166',
					foreground: '#333333',
					50: '#fffaef',
					100: '#fff1d4',
					200: '#ffe9b8',
					300: '#ffdf9c',
					400: '#ffd880',
					500: '#ffd166',
					600: '#e6bc5c',
					700: '#cca651',
					800: '#b39147',
					900: '#997b3c'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#f8f9fa',
					foreground: '#6c757d'
				},
				dark: {
					DEFAULT: '#2c3e50',
					foreground: '#ffffff'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					from: { opacity: 0, transform: 'translateY(10px)' },
					to: { opacity: 1, transform: 'translateY(0)' }
				},
				'fade-out': {
					from: { opacity: 1 },
					to: { opacity: 0 }
				},
				'slide-in': {
					from: { transform: 'translateX(100%)' },
					to: { transform: 'translateX(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'fade-in-slow': 'fade-in 0.8s ease-out',
				'fade-out': 'fade-out 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'float': 'float 6s ease-in-out infinite',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
