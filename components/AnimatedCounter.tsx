import React from "react"
import CountUp from "react-countup"

const AnimatedCounter = ({ amount }: { amount: number }) => {
	return (
		<div className="w-full">
			<CountUp end={amount} prefix="BTN" duration={2} decimals={2} />
		</div>
	)
}

export default AnimatedCounter
