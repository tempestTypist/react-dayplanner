import { useState, useEffect, useMemo } from "react";
import { Form, Row, Col, Card } from 'react-bootstrap';

const Schedule = (props) => {
  const timeBlocks = [
    { id: "0", hour: "12", time: "00", ampm: "am", reminder: "" },
    { id: "1", hour: "1", time: "01", ampm: "am", reminder: "" },
    { id: "2", hour: "2", time: "02", ampm: "am", reminder: "" },
    { id: "3", hour: "3", time: "03", ampm: "am", reminder: "" },
    { id: "4", hour: "4", time: "04", ampm: "am", reminder: "" },
    { id: "5", hour: "5", time: "05", ampm: "am", reminder: "" },
    { id: "6", hour: "6", time: "06", ampm: "am", reminder: "" },
    { id: "7", hour: "7", time: "07", ampm: "am", reminder: "" },
    { id: "8", hour: "8", time: "08", ampm: "am", reminder: "" },
    { id: "9", hour: "9", time: "09", ampm: "am", reminder: "" },
    { id: "10", hour: "10", time: "10", ampm: "am", reminder: "" },
    { id: "11", hour: "11", time: "11", ampm: "am", reminder: "" },
    { id: "12", hour: "12", time: "12", ampm: "pm", reminder: "" },
    { id: "13", hour: "1", time: "13", ampm: "pm", reminder: "" },
    { id: "14", hour: "2", time: "14", ampm: "pm", reminder: "" },
    { id: "15", hour: "3", time: "15", ampm: "pm", reminder: "" },
    { id: "16", hour: "4", time: "16", ampm: "pm", reminder: "" },
    { id: "17", hour: "5", time: "17", ampm: "pm", reminder: "" },
    { id: "18", hour: "6", time: "18", ampm: "pm", reminder: "" },
    { id: "19", hour: "7", time: "19", ampm: "pm", reminder: "" },
    { id: "20", hour: "8", time: "20", ampm: "pm", reminder: "" },
    { id: "21", hour: "9", time: "21", ampm: "pm", reminder: "" },
    { id: "22", hour: "10", time: "22", ampm: "pm", reminder: "" },
    { id: "23", hour: "11", time: "23", ampm: "pm", reminder: "" }
  ];
	const [values, setValues] = useState([timeBlocks]);
	const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());

	const getCurrentHour = () => new Date().getHours();
	const currentHour = useMemo(() => getCurrentHour(), []);

	const setClass = (HH) => {
		if (HH < currentHour) return "timeblock-row past";
		if (HH === currentHour) return "timeblock-row present";
		return "timeblock-row future";
	};

  const saveToLocalStorage = () => {
    if (localStorage) {
      localStorage.setItem("values", JSON.stringify(values));
    }
  };

	const handleInputChange = (e) => {
		const { value, id } = e.target;

		if (values[id].time >= getCurrentHour()) {
			setValues((prevValues) => {
				const newValues = prevValues.map((timeblock) =>
					timeblock.id === id ? { ...timeblock, reminder: value } : timeblock
				);
				saveToLocalStorage(newValues);
				return newValues;
			});
		} else {
      props.setErrorMessage("Can't set events in past!");
      props.setShow(true);
    }
	};

	useEffect(() => {
    const checkForDateChange = () => {
      const currentDay = new Date().toLocaleDateString();
      if (currentDay !== currentDate) {
        setValues(timeBlocks);
        setCurrentDate(currentDay);
        localStorage.removeItem("values"); 
      }
    };

    const intervalId = setInterval(checkForDateChange, 60000);

    return () => clearInterval(intervalId);
  }, [currentDate]);

	useEffect(() => {
		try {
			const storedDay = localStorage.getItem("values");
			if (storedDay) {
				setValues(JSON.parse(storedDay));
			} else {
				setValues(timeBlocks);
			}
		} catch (error) {
			console.error('Failed to load schedule from localStorage:', error);
			setValues(timeBlocks);
		}
	}, []);

  return (
    <Card>
      <div className="dayplanner-container softcard-container">
        <Row className="border-dark border-bottom">
          <Col xs={12}>
            <h2 className="p-2 ps-4">Schedule</h2>
          </Col>
        </Row>

        {values.map((timeblock) => (
          <Form key={`timeblock-${timeblock.id}`} className={setClass(timeblock.time)}>
            <Form.Group as={Row}>
              <Form.Label className="col-2 hour text-center" htmlFor={`timeblock-${timeblock.id}`}>
								{timeblock.hour}{timeblock.ampm}
							</Form.Label>
              <Col lg="10" className="description p-0">
                <Form.Control
                  as="textarea"
                  type="text"
                  id={timeblock.id}
                  name="reminder"
									aria-labelledby={`timeblock-${timeblock.id}`}
                  className={setClass(timeblock.time)}
                  defaultValue={timeblock.reminder}
                  onChange={handleInputChange}
                />
              </Col>
            </Form.Group>
          </Form>
        ))}
      </div>
    </Card>
	
  );
};

export default Schedule;