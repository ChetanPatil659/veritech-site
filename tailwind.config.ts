import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
	// colors: {
	// 	primary : '#F8F8F8',
	// 	secondary: '#181B31',
	// 	accent : '#FFC233',
	// 	accent2: '#7987F7',
	// },
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			'2xl': '1400px'
  		}
  	},
  	extend: {
		colors: {
			primary : '#F8F8F8',
			secondary: '#181B31',
			accent : '#FFC233',
			accent2: '#7987F7',
		},
		keyframes: {
			"accordion-down": {
			  from: { height: "0" },
			  to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			  from: { height: "var(--radix-accordion-content-height)" },
			  to: { height: "0" },
			},
		  },
		  animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		  },
  		fontFamily: {
  			julius: [
  				'var(--font-julius)'
  			]
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config