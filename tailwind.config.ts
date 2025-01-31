import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
		"./constants/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: "2rem",
			screens: {
				"2xl": "1400px",
			},
		},
		extend: {
			colors: {
				fill: {
					1: "rgba(255, 255, 255, 0.10)",
				},
				bankGradient: "#6E56CF",
				indigo: {
					500: "#7C3AED",
					700: "#5B21B6",
				},
				success: {
					25: "#F0FDF4",
					50: "#DCFCE7",
					100: "#BBF7D0",
					600: "#16A34A",
					700: "#15803D",
					900: "#14532D",
				},
				pink: {
					25: "#FDF2F8",
					100: "#FBCFE8",
					500: "#EC4899",
					600: "#DB2777",
					700: "#BE185D",
					900: "#831843",
				},
				teal: {
					25: "#F0FDFA",
					100: "#CCFBF1",
					500: "#14B8A6",
					600: "#0D9488",
					700: "#0F766E",
					900: "#134E4A",
				},
				sky: {
					1: "#F0F9FF",
				},
				black: {
					1: "#0F172A",
					2: "#1E293B",
				},
				gray: {
					25: "#F8FAFC",
					200: "#E2E8F0",
					300: "#CBD5E1",
					500: "#64748B",
					600: "#475569",
					700: "#334155",
					900: "#0F172A",
				},
			},
			backgroundImage: {
				"bank-gradient": "linear-gradient(90deg, #6E56CF 0%, #9F7AEA 100%)", // Purple gradient
				"gradient-mesh": "url('/icons/gradient-mesh.svg')",
				"bank-green-gradient":
					"linear-gradient(90deg, #14B8A6 0%, #2DD4BF 100%)", // Teal gradient
			},
			boxShadow: {
				form: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
				chart:
					"0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
				profile:
					"0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
				creditCard: "8px 10px 16px 0px rgba(0, 0, 0, 0.05)",
			},
			fontFamily: {
				inter: "var(--font-inter)",
				"ibm-plex-serif": "var(--font-ibm-plex-serif)",
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
		},
	},
	plugins: [tailwindcssAnimate],
} satisfies Config

export default config
