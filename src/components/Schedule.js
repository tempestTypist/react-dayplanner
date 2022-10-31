import React, { useState } from "react";
import { Form, Row, Col, Card, Toast } from 'react-bootstrap';
import moment from "moment";

const Schedule = () => {
	const [show, setShow] = useState(false);
	const [values, setValue] = useState([
		{
			id: "0",
			hour: "12",
			time: "00",
			ampm: "am",
			reminder: ""
		},
		{
			id: "1",
			hour: "1",
			time: "01",
			ampm: "am",
			reminder: ""
		},
		{
			id: "2",
			hour: "2",
			time: "02",
			ampm: "am",
			reminder: ""
		},
		{
			id: "3",
			hour: "3",
			time: "03",
			ampm: "am",
			reminder: ""
		},
		{
			id: "4",
			hour: "4",
			time: "04",
			ampm: "am",
			reminder: ""
		},
		{
			id: "5",
			hour: "5",
			time: "05",
			ampm: "am",
			reminder: ""
		},
		{
			id: "6",
			hour: "6",
			time: "06",
			ampm: "am",
			reminder: ""
		},
		{
			id: "7",
			hour: "7",
			time: "07",
			ampm: "am",
			reminder: ""
		},
		{
			id: "8",
			hour: "8",
			time: "08",
			ampm: "am",
			reminder: ""
		},
		{
			id: "9",
			hour: "9",
			time: "09",
			ampm: "am",
			reminder: ""
		},
		{
				id: "10",
				hour: "10",
				time: "10",
				ampm: "am",
				reminder: ""
		},
		{
				id: "11",
				hour: "11",
				time: "11",
				ampm: "am",
				reminder: ""
		},
		{
				id: "12",
				hour: "12",
				time: "12",
				ampm: "pm",
				reminder: ""
		},
		{
				id: "13",
				hour: "1",
				time: "13",
				ampm: "pm",
				reminder: ""
		},
		{
				id: "14",
				hour: "2",
				time: "14",
				ampm: "pm",
				reminder: ""
		},
		{
				id: "15",
				hour: "3",
				time: "15",
				ampm: "pm",
				reminder: ""
		},
		{
				id: "16",
				hour: "4",
				time: "16",
				ampm: "pm",
				reminder: ""
		},
		{
				id: "17",
				hour: "5",
				time: "17",
				ampm: "pm",
				reminder: ""
		},
		{
			id: "18",
			hour: "6",
			time: "18",
			ampm: "pm",
			reminder: ""
		},
		{
			id: "19",
			hour: "7",
			time: "19",
			ampm: "pm",
			reminder: ""
		},
		{
			id: "20",
			hour: "8",
			time: "20",
			ampm: "pm",
			reminder: ""
		},
		{
			id: "21",
			hour: "9",
			time: "21",
			ampm: "pm",
			reminder: ""
		},
		{
			id: "22",
			hour: "10",
			time: "22",
			ampm: "pm",
			reminder: ""
		},
		{
			id: "23",
			hour: "11",
			time: "23",
			ampm: "pm",
			reminder: ""
		}
	]);
	const [errorMessage, setErrorMessage] = useState('');

	function setClass(HH) {
		let currentClass;
		if (HH < moment().format("HH")) {
			currentClass = "timeblock-row past";
		} else if (HH === moment().format("HH")) {
			currentClass = "timeblock-row present";
		} else if (HH > moment().format("HH")) {
			currentClass = "timeblock-row future";
		}
		return currentClass;
	}

	//is currentdate

	//checkClass
	//if {textarea class} = past
	//setstate hidden

	//check class, if 'future' then update reminder with value input
	const handleInputChange = (e) => {
		let { className, value, id } = e.target

		if (className === 'timeblock-row future form-control') {
			values[id].reminder = value
			setValue(values)
		} else { 
			setErrorMessage("Can't set events in past or present!");
			setShow(true);
			return;
		}
		handleFormSubmit(e);
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();

		// localStorage.setItem("values", JSON.stringify(values));
		// console.log("Values saved!")
		// let storedDay = JSON.parse(localStorage.getItem("values"));
		// let midnight = "0:00:00";
		// let now;

		// if (localStorage) {
		// 	setValue(storedDay)
		// 	saveDay();
		// 	console.log("Stored Day")
		// } else {
		// 	setValue(values)
		// 	saveDay();
		// 	console.log("Set back to Values")
		// }

		// setInterval(function() {
		// 	now = moment().format("H:mm:ss")
		// 	if (now === midnight) {
		// 		setValue([
		// 			{
		// 				id: "0",
		// 				hour: "12",
		// 				time: "00",
		// 				ampm: "am",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "1",
		// 				hour: "1",
		// 				time: "01",
		// 				ampm: "am",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "2",
		// 				hour: "2",
		// 				time: "02",
		// 				ampm: "am",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "3",
		// 				hour: "3",
		// 				time: "03",
		// 				ampm: "am",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "4",
		// 				hour: "4",
		// 				time: "04",
		// 				ampm: "am",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "5",
		// 				hour: "5",
		// 				time: "05",
		// 				ampm: "am",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "6",
		// 				hour: "6",
		// 				time: "06",
		// 				ampm: "am",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "7",
		// 				hour: "7",
		// 				time: "07",
		// 				ampm: "am",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "8",
		// 				hour: "8",
		// 				time: "08",
		// 				ampm: "am",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "9",
		// 				hour: "9",
		// 				time: "09",
		// 				ampm: "am",
		// 				reminder: ""
		// 			},
		// 			{
		// 					id: "10",
		// 					hour: "10",
		// 					time: "10",
		// 					ampm: "am",
		// 					reminder: ""
		// 			},
		// 			{
		// 					id: "11",
		// 					hour: "11",
		// 					time: "11",
		// 					ampm: "am",
		// 					reminder: ""
		// 			},
		// 			{
		// 					id: "12",
		// 					hour: "12",
		// 					time: "12",
		// 					ampm: "pm",
		// 					reminder: ""
		// 			},
		// 			{
		// 					id: "13",
		// 					hour: "1",
		// 					time: "13",
		// 					ampm: "pm",
		// 					reminder: ""
		// 			},
		// 			{
		// 					id: "14",
		// 					hour: "2",
		// 					time: "14",
		// 					ampm: "pm",
		// 					reminder: ""
		// 			},
		// 			{
		// 					id: "15",
		// 					hour: "3",
		// 					time: "15",
		// 					ampm: "pm",
		// 					reminder: ""
		// 			},
		// 			{
		// 					id: "16",
		// 					hour: "4",
		// 					time: "16",
		// 					ampm: "pm",
		// 					reminder: ""
		// 			},
		// 			{
		// 					id: "17",
		// 					hour: "5",
		// 					time: "17",
		// 					ampm: "pm",
		// 					reminder: ""
		// 			},
		// 			{
		// 				id: "18",
		// 				hour: "6",
		// 				time: "18",
		// 				ampm: "pm",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "19",
		// 				hour: "7",
		// 				time: "19",
		// 				ampm: "pm",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "20",
		// 				hour: "8",
		// 				time: "20",
		// 				ampm: "pm",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "21",
		// 				hour: "9",
		// 				time: "21",
		// 				ampm: "pm",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "22",
		// 				hour: "10",
		// 				time: "22",
		// 				ampm: "pm",
		// 				reminder: ""
		// 			},
		// 			{
		// 				id: "23",
		// 				hour: "11",
		// 				time: "23",
		// 				ampm: "pm",
		// 				reminder: ""
		// 			}
		// 		])
		// 		saveDay();
		// 		console.log("Midnight - Values reset!")
		// 	} else {
		// 		console.log(storedDay)
		// 		setValue(storedDay)
		// 		saveDay();
		// 		console.log("Today updated with StoredDay!")
		// 	}
		// }, 10000);
	};

  // useEffect(() => {	
	// 	setValue( values )
  //   // if (localStorage) {
  //   //   let locallystoredDay = localStorage.getItem("values");

  //   //   if (locallystoredDay) {
  //   //     let storedDay = JSON.parse(locallystoredDay);
	// 	// 		let midnight = "0:00:00";
	// 	// 		let now;

	// 	// 		setValue( [...storedDay] );

	// 	// 		let currentDate = moment().format("MM DD YYYY")

	// 	// 		// setInterval(function() {
	// 	// 		// 	now = moment().format("H:mm:ss")
	// 	// 		// 	if (now === midnight) {
	// 	// 		// 		setValue( values )
	// 	// 		// 		console.log(values)
	// 	// 		// 		console.log("Midnight - Values reset!")
	// 	// 		// 	} else {
	// 	// 		// 		setValue( [...storedDay] );
	// 	// 		// 		console.log([...storedDay])
	// 	// 		// 		console.log("Today updated with StoredDay!")
	// 	// 		// 	}
	// 	// 		// }, 10000);

  //   //   } else {
	// 	// 		setValue( values )
	// 	// 	}

	// 	// } else {
	// 	// 	setValue( values )
	// 	// 	console.log(values)
	// 	// 	console.log("set today") }
  // }, []);

  return (
	<Card>
		<div className="dayplanner-container softcard-container">
			<Row className="border-dark border-bottom">
				<Col xs={6}>
				<h2 className="p-2 ps-4">Schedule</h2>
				</Col>
				<Col xs={6}>
					<Toast className="toast-error" onClose={() => setShow(false)} show={show} delay={3000} autohide>
						<Toast.Body>{errorMessage}</Toast.Body>
					</Toast>
				</Col>
			</Row>


			{values.map((timeblock) => (
			<Form className={setClass(timeblock.time)} onSubmit={handleFormSubmit}>
				<Form.Group as={Row}>
					<Form.Label className="col-2 hour text-center">{timeblock.hour}{timeblock.ampm}</Form.Label>
					<Col lg="10" className="description p-0">
					<Form.Control
							as="textarea"
							type="text"
							id={timeblock.id} 
							name="reminder"
							className={setClass(timeblock.time)}
							defaultValue={timeblock.reminder}
							onChange={handleInputChange}>
					</Form.Control>
					</Col>
				</Form.Group>
			</Form> ))}
		</div>
	</Card>
	
  );
};

export default Schedule;