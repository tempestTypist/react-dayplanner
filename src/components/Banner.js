import { Container } from 'react-bootstrap';
import { formatDate } from '../utils/dateUtils';

const Banner = ({ weather }) => {
  const times = {
    night: [[0, 5], [21, 24]],
    morning: [[8, 11]],
    afternoon: [[12, 17]],
    twilight: [[18, 20], [6, 7]],
  };

  function setBanner() {
    const hour = new Date().getHours();
    if (hour < 0 || hour > 23) {
      console.error("Invalid hour detected: ", hour);
      return "banner afternoon";
    }
  
    for (const [time, ranges] of Object.entries(times)) {
      for (const [start, end] of ranges) {
        if (hour >= start && hour <= end) {
          return `banner ${time} ${weather ? weather.toLowerCase() : null}`;
        }
      }
    }
    return "banner afternoon";
  }

  return (
    <header className={setBanner()}>
      <Container fluid>
        {formatDate()}
      </Container>
    </header>
  );
};

export default Banner;