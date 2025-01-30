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
    <div className="clear-btn me-2">
      <Button type="submit" className="clearbtn" onClick={() => clear(lsName, defaultState)}>
        Clear
      </Button>
    </div>
  );
};

export default ClearBtn;