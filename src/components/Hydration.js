import { useState, useEffect } from "react";
import { Card } from 'react-bootstrap';
import worter from '../assets/images/worter-full.png'
import bortle from '../assets/images/worter.png'

const createWaterBottles = (count) => {
	return Array.from({ length: count }, (_, i) => ({
		id: `${i + 1}-bottle`,
		isDrank: false
	}));
};

const Hydration = () => {
	const [water, drinkWater] = useState(createWaterBottles(8));	

	const setDrank = (id) => {
		const updatedWater = water.map((bottle) => 
			bottle.id === id ? { ...bottle, isDrank: !bottle.isDrank } : bottle
		);
		drinkWater(updatedWater);
		localStorage.setItem("water", JSON.stringify(updatedWater));
	};

	useEffect(() => {
    const resetAtMidnight = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const timeUntilMidnight = midnight - now;

      setTimeout(() => {
        drinkWater(water);
        localStorage.removeItem("water");
        
        resetAtMidnight();
      }, timeUntilMidnight);
    };

    resetAtMidnight();

    return () => clearTimeout();
  }, []);
	
	useEffect(() => {
		const storedWater = localStorage.getItem("water");
		if (storedWater) {
			drinkWater(JSON.parse(storedWater));
		} else {
			drinkWater(water);
		}
	}, [water]);
	
  return (
	<Card>
		<div className="water-container softcard-container">
			<ul className="glasses">
				{water.map((bottle) => 
				<li id={bottle} key={bottle.id} >
					<img 
						alt="Water bottle" 
						onClick={() => setDrank(bottle.id)} 
						src={
							bottle.isDrank
							? worter
							: bortle } 
					/>
				</li>
				)}
			</ul>
		</div>
	</Card>
  );
};

export default Hydration;