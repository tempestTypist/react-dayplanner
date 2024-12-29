import { Container } from 'react-bootstrap';

const Banner = ({ weather }) => {

  const times = {
    night: [[0, 5], [21, 24]],
    morning: [[6, 10]],
    afternoon: [[11, 17]],
    twilight: [[18, 20]],
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
          return `banner ${time} ${weather ? weather : null}`;
        }
      }
    }
    return "banner afternoon";
  }

  function formatDate() {
    const date = new Date();
    const options = { 
      year: 'numeric',
      month: 'short',
      day: '2-digit'
    };
    
    return new Intl.DateTimeFormat('en-US', options).format(date);
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