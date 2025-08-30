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
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				neural: {
					primary: 'hsl(var(--neural-primary))',
					secondary: 'hsl(var(--neural-secondary))',
					glow: 'hsl(var(--neural-glow))',
					dark: 'hsl(var(--neural-dark))',
					surface: 'hsl(var(--neural-surface))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				'orbitron': ['Orbitron', 'monospace'],
				'rajdhani': ['Rajdhani', 'sans-serif']
			},
			animation: {
				'float': 'float 6s ease-in-out infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'typing': 'typing 3s steps(40, end), blink 0.75s step-end infinite',
				'fade-in': 'fadeIn 1s ease-out',
				'slide-up': 'slideUp 0.8s ease-out',
				'scale-in': 'scaleIn 0.6s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite'
			},
			keyframes: {
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'glow': {
					'from': { textShadow: '0 0 10px hsl(var(--neural-primary) / 0.8)' },
					'to': { textShadow: '0 0 20px hsl(var(--neural-primary) / 1)' }
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'from, to': { borderColor: 'transparent' },
					'50%': { borderColor: 'hsl(var(--neural-primary))' }
				},
				'fadeIn': {
					'from': { opacity: '0', transform: 'translateY(30px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'slideUp': {
					'from': { opacity: '0', transform: 'translateY(50px)' },
					'to': { opacity: '1', transform: 'translateY(0)' }
				},
				'scaleIn': {
					'from': { opacity: '0', transform: 'scale(0.9)' },
					'to': { opacity: '1', transform: 'scale(1)' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--neural-primary) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--neural-primary) / 0.6)' }
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
