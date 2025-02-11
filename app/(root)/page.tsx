import RightSidebar from "@/components/RightSidebar"
import HeaderBox from "@/components/ui/HeaderBox"
import TotalBalanceBox from "@/components/ui/TotalBalanceBox"
import React from "react"

const Home = () => {
	const loggedIn = {
		firstName: "Pema",
		lastName: "Wangchuk",
		email: "pema2025@gmail.com",
	}
	return (
		<section className="home">
			<div className="home-content">
				<header className="home-header">
					<HeaderBox
						type="greeting"
						title="Welcome"
						user={loggedIn?.firstName || "Guest"}
						subtext="Access and manage your account and transaction"
					/>

					<TotalBalanceBox
						accounts={[]}
						totalBanks={1}
						totalCurrentBalance={1250.45}
					/>
				</header>
				RECENT TRANSACTIONS
			</div>
			<RightSidebar
				user={loggedIn}
				transactions={[]}
				banks={[{ currentBalance: 1250.45 }]}
				email={loggedIn?.email}
			/>
		</section>
	)
}

export default Home
