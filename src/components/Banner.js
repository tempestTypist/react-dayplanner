import React from "react";
import Moment from 'react-moment';
import moment from "moment";
import { Container } from 'react-bootstrap';

const Banner = () => {

	function setBanner() {
    let now = moment().format("k")
		let bannerClass;
		if (now === 0 ) {
			bannerClass = "banner midnight";
		} else if (now >= 1 && now <= 5 || now >= 21 && now <= 23 ) {
			bannerClass = "banner night";
		} else if (now >= 6 && now <= 10 ) {
			bannerClass = "banner morning";
		} else if (now >= 11 && now <= 13) {
      bannerClass = "banner noon"
    } else if (now >= 14 && now <= 17) {
      bannerClass = "banner afternoon"
    } else if (now >= 18 && now <= 20) {
      bannerClass = "banner twilight"
    } else {
      bannerClass = "banner noon"
    }
		return bannerClass;
	}

  return (
    <header className={setBanner()}>
      <Container fluid>
        <Moment format="MMM Do, YYYY"></Moment>
      </Container>
    </header>
  );
};

export default Banner;