import { Button } from 'react-bootstrap';

const ClearBtn = ({ lsName, defaultState, stateSet }) => {
  const clear = (ls, ds) => {
    try {
			const locallyStored = localStorage.getItem(ls);
			if (locallyStored) {
        console.log("stored item found: " + ls)
        localStorage.removeItem(ls);
        stateSet(ds);
			} else {
        console.log("no stored item")
				stateSet(ds);
			}
		} catch (error) {
			console.error('Failed to clear local storage:', error);
			stateSet(ds);
		}
  }

  return (
    <Button type="submit" className="dropbtn" onClick={() => clear(lsName, defaultState)}>
      Clear
    </Button>
  );
};

export default ClearBtn;