import { useRef } from "react";
import ReactDOM from "react-dom";

import useEventListener from "../hooks/useEventListener";

const UseEventListenerDemo = ({ show = false, onClose = () => null }) => {
  const dialogRef = useRef(null);

  // Event listener to close dialog on click outside element
  useEventListener(
    "mousedown",
    (event) => {
      // Do nothing if the event was already processed
      if (event.defaultPrevented) {
        return;
      }
      // Check if click is outside the dialog
      if (!dialogRef?.current?.contains(event.target)) {
        onClose();
      }
    },
    dialogRef.current
  );

  // Renders dailog
  return show
    ? ReactDOM.createPortal(<div ref={dialogRef}>...</div>, document.body)
    : null;
};

export default UseEventListenerDemo;
