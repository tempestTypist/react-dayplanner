import { useState } from "react";
import { Card } from 'react-bootstrap';
import worter from '../assets/images/worter-full.png'
import bortle from '../assets/images/worter.png'

const Hydration = () => {

	const [water, drinkWater] = useState([{id: 'one-bottle'}, {id: 'two-bottle'}, {id: 'three-bottle'}, {id: 'four-bottle'}, {id: 'five-bottle'}, {id: 'six-bottle'}, {id: 'seven-bottle'}, {id: 'eight-bottle'} ]);

	const waterbottles = water.map((bottle, i) => {
		return <li id={bottle} key={i} >
			<img alt="Water bottle" onClick={() => setDrank(bottle)} src={
				bottle.isDrank
				? worter
				: bortle
			} />
		</li>
	});

  const setDrank = (id) => {
    // If the ID passed to this function matches the ID of the item that was clicked, mark it as complete
    let clickedBottle = water.map((bottle) => {
      if (bottle === id) {
        bottle.isDrank = !bottle.isDrank;
      }
      return bottle;
    });

    drinkWater(clickedBottle);
		// localStorage.setItem("water", JSON.stringify(water));
  };

	// useEffect(() => {	
	// 	drinkWater(water)
  //   // if (localStorage) {
  //   //   let waterDrank = localStorage.getItem("water");
	// 	// 	if (waterDrank) {
	// 	// 		let storedWater = JSON.parse(waterDrank);
	// 	// 		drinkWater( [...storedWater] );
	// 	// 	}
	// 	// } else {
	// 	// 	drinkWater(water)
	// 	// }
  // }, []);

  return (
	<Card>
		<div className="water-container softcard-container">
			<ul className="glasses">
				{waterbottles}
			</ul>
		</div>
	</Card>
  );
};

export default Hydration;