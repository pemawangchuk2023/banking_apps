import React from "react"

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			Sidebar
			{children}
		</main>
	)
}
export default RootLayout
