import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";

import "./index.css";

const ScrollToTop = () => {
  return (
    <>
      <a href="/#" className="scrollToTop">
        <FontAwesomeIcon className="faIcon" icon={faChevronUp} />
      </a>
    </>
  );
}

export default ScrollToTop;
