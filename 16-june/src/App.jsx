import { useState } from "react";
import "./App.css";

const BUTTON_WRAPPER_STYLES = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "green",
  padding: "10px",
};

const Modal = ({ children, open, onClose }) => {
  return (
    <div>
      <button onClick={onClose}>Close Modal</button>
      {children}
    </div>
  );
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button style={BUTTON_WRAPPER_STYLES} onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        <Modal
          open={isOpen}
          onClose={() => {
            setIsOpen(false);
          }}
        >
          Modal
        </Modal>
      </div>
      <div style={OTHER_CONTENT_STYLES}>Other Content</div>
    </>
  );
}

export default App;
