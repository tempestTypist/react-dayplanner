import { useState, useEffect, useMemo } from "react";
import { Form, Row, Col, Card } from 'react-bootstrap';
import { getCurrentHour } from '../utils/dateUtils';
import Timeblock from './Timeblock';
import ClearBtn from './ClearBtn';

const Schedule = (props) => {
  const timeBlocks = useMemo(() => [
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
  ], []);
	const [timeblock, setTimeblocks] = useState(timeBlocks);
	const currentHour = useMemo(() => getCurrentHour(), []);

	const setClass = (hour) => {
		if (hour < currentHour) return "timeblock-row past";
		if (hour === currentHour) return "timeblock-row present";
		return "timeblock-row future";
	};

  const saveToLocalStorage = (value) => {
    if (localStorage) {
      localStorage.setItem("timeblock", JSON.stringify(value));
    }
  };

	const handleInputChange = (e) => {
		const { value, id } = e.target;
    const timeblockId = id.split('-')[1];

    if (timeblock[timeblockId]?.time >= getCurrentHour()) {
			setTimeblocks((prevValues) => {
				const newValues = prevValues.map((tb) =>
					tb.id === timeblockId ? { ...tb, reminder: value } : tb
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
    const resetAtMidnight = () => {
      const now = new Date();
      const midnight = new Date();
      midnight.setHours(24, 0, 0, 0);
      const timeUntilMidnight = midnight - now;

      setTimeout(() => {
        setTimeblocks(timeBlocks);
        localStorage.removeItem("timeblock");
        
        resetAtMidnight();
      }, timeUntilMidnight);
    };

    resetAtMidnight();
  }, [timeBlocks]);

	useEffect(() => {
		try {
			const storedDay = localStorage.getItem("timeblock");
			if (storedDay) {
				setTimeblocks(JSON.parse(storedDay));
			} else {
				setTimeblocks(timeBlocks);
			}
		} catch (error) {
			console.error('Failed to load schedule from localStorage:', error);
			setTimeblocks(timeBlocks);
		}
	}, [timeBlocks]);

  return (
    <Card>
      <div className="dayplanner-container softcard-container">
        <Row className="border-dark border-bottom">
          <Col className="d-flex">
            <h2 className="p-2 ps-4 pe-4">Schedule</h2>
            <ClearBtn 
              lsName="timeblock"
              defaultState={timeBlocks}
              stateSet={setTimeblocks}
            />
          </Col>
        </Row>

        <Form>
          {timeblock.map((tb) => (
            <Timeblock 
              key={`timeblock-${tb.id}`}
              id={tb.id}
              label={`${tb.hour}${tb.ampm}`}
              reminder={tb.reminder}
              setClass={setClass(tb.time)}
              handleInputChange={handleInputChange}
            />
          ))}
        </Form>
      </div>
    </Card>
	
  );
};

export default Schedule;