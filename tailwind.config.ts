import type { Config } from "tailwindcss"
const { fontFamily } = require("tailwindcss/defaultTheme")

const defaultTheme = require("tailwindcss/defaultTheme");
 
const svgToDataUri = require("mini-svg-data-uri");
 
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

export default {
    darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		container: {
		  center: true,
		  padding: "1.5rem",
		  screens: {
			"2xl": "1400px",
		  },
		},
		extend: {
		  colors: {
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
			  DEFAULT: "hsl(var(--primary))",
			  foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
			  DEFAULT: "hsl(var(--secondary))",
			  foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
			  DEFAULT: "hsl(var(--destructive))",
			  foreground: "hsl(var(--destructive-foreground))",
			},
			muted: {
			  DEFAULT: "hsl(var(--muted))",
			  foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
			  DEFAULT: "hsl(var(--accent))",
			  foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
			  DEFAULT: "hsl(var(--popover))",
			  foreground: "hsl(var(--popover-foreground))",
			},
			card: {
			  DEFAULT: "hsl(var(--card))",
			  foreground: "hsl(var(--card-foreground))",
			},
		  },
		  borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		  },
		  keyframes: {
			spinner: {
				'0%': { transform: 'perspective(120px) rotateX(0) rotateY(0)' },
				'50%': { transform: 'perspective(120px) rotateX(-180deg) rotateY(0)' },
				'100%': { transform: 'perspective(120px) rotateX(-180deg) rotateY(-180deg)' },
			},
			shadowPulse: {
				'0%': { 'box-shadow': '0 0 0 0px rgba(151, 119, 250, 0.8)' },
				'100%': { 'box-shadow': '0 0 0 5px rgba(0, 0, 0, 0)' },
			},
			shadowPulseBig: {
				'0%': { 'box-shadow': '0 0 0 0px rgba(239, 63, 72, 0.1)' },
				'100%': { 'box-shadow': '0 0 0 20px rgba(0, 0, 0, 0)' },
			},
			jump: {
				'0%': { transform: 'translate3d(0, 20%, 0)' },
				'100%': { transform: 'translate3d(0, 0, 0)' },
			},
			animationFramesOne: {
				'0%': { transform: 'translate(0px, 0px) rotate(0deg)' },
				'20%': { transform: 'translate(73px, -1px) rotate(36deg)' },
				'40%': { transform: 'translate(141px, 72px) rotate(72deg)' },
				'60%': { transform: 'translate(83px, 122px) rotate(108deg)' },
				'80%': { transform: 'translate(-40px, 72px) rotate(144deg)' },
				'100%': { transform: 'translate(0px, 0px) rotate(0deg)'},
			},
			rotateMe: {
				'from': { transform: 'rotate(0deg)' },
				'to': { transform: 'rotate(360deg)' },
			},
			rotate3d: {
				'0%': { transform: 'rotateY(0deg)' },
				'100%': { transform: 'rotateY(360deg)' },
			},
			heroThumbAnimation: {
				'0%': { transform: 'translateY(-40px)' },
				'100%': { transform: 'translateY(0px)' },
			},
			wiggle: {
				'0%, 100%': { transform: 'scale(1.2) rotate(7deg)' },
				'50%': { transform: 'scale(0.8) rotate(-7deg)' },
			},
			"accordion-down": {
			  from: { height: "0" },
			  to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
			  from: { height: "var(--radix-accordion-content-height)" },
			  to: { height: "0" },
			},
			'text': {
				'0%, 100%': {
				   'background-size':'200% 200%',
					'background-position': 'left center'
				},
				'50%': {
				   'background-size':'200% 200%',
					'background-position': 'right center'
				}
			},
		  },
		  animation: {
			'wiggle': 'wiggle 2s linear infinite alternate',
			'heroThumbAnimation': 'heroThumbAnimation 10s linear infinite alternate',
			'rotateMe': 'rotateMe 10s linear infinite alternate',
			'animationFramesOne': 'animationFramesOne 20s linear infinite alternate',
			'spin-slow': 'spin 3s linear infinite',
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
			'text':'text 5s ease infinite',
		  },
		  backgroundImage: {
			  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
			  'gradient-conic':
			  'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			  'appstore': "url('https://res.cloudinary.com/dfetnvy6t/image/upload/v1722409700/pngegg_2_km1qnt.png')",
			  'playstore': "url('https://res.cloudinary.com/dfetnvy6t/image/upload/v1722409700/pngegg_1_lprotm.png')",
		  },
		  fontFamily: {
			sans: ["var(--font-sans)", ...fontFamily.sans],
		  },
		},
	  },
	  plugins: [
		require("tailwindcss-animate"),
		addVariablesForColors,
		function ({ matchUtilities, theme }: any) {
		  matchUtilities(
			{
			  "bg-grid": (value: any) => ({
				backgroundImage: `url("${svgToDataUri(
				  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
				)}")`,
			  }),
			  "bg-grid-small": (value: any) => ({
				backgroundImage: `url("${svgToDataUri(
				  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
				)}")`,
			  }),
			  "bg-dot": (value: any) => ({
				backgroundImage: `url("${svgToDataUri(
				  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
				)}")`,
			  }),
			  "bg-dot-small": (value: any) => ({
				backgroundImage: `url("${svgToDataUri(
				  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
				)}")`,
			  }),
			  "bg-dot-thick": (value: any) => ({
				backgroundImage: `url("${svgToDataUri(
				  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="2.5"></circle></svg>`
				)}")`,
			  }),
			},
			{ values: flattenColorPalette(theme("backgroundColor")), type: "color" }
		  );
		},
		function({ addUtilities }: any) {
			const newUtilities = {
			  '.perspective-1000': {
				perspective: '1000px'
			  },
			  '.transform-style-3d': {
				transformStyle: 'preserve-3d'
			  },
			  '.backface-hidden': {
				backfaceVisibility: 'hidden'
			  },
			  '.rotate-y-0': {
				transform: 'rotateY(0deg)'
			  },
			  '.rotate-y-180': {
				transform: 'rotateY(180deg)'
			  }
			}
			addUtilities(newUtilities)
		}	  
	  ],
} satisfies Config;


 
function addVariablesForColors({ addBase, theme }: any) {
	let allColors = flattenColorPalette(theme("colors"));
	let newVars = Object.fromEntries(
	  Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
	);
   
	addBase({
	  ":root": newVars,
	});
  }