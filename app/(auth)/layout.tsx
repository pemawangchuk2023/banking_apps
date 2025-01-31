import React from "react"

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main>
			Sidebar
			{children}
		</main>
	)
}
export default AuthLayout
