export const dynamic = "force-dynamic"
import type { Metadata } from "next"
import "./globals.css"
import { Inter } from "next/font/google"

const inter = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-inter",
})
const spaceGrotesk = Inter({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700"],
	variable: "--font-spaceGrotesk",
})

export const metadata: Metadata = {
	title: "Banking Apps",
	description: "The best banking apps in the world",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${inter.variable} ${spaceGrotesk.variable}`}>
				{children}
			</body>
		</html>
	)
}
