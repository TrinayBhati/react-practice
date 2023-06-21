import { useState } from "react";

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

const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  backgroundColor: "#FFF",
  padding: "50px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  right: 0,
  left: 0,
  bottom: 0,
  top: 0,
  backgroundColor: "rgba(0,0,0,0.7)",
  zIndex: 1000,
};

const Modal = ({ children, open, onClose }) => {
  if (!open) return null;
  return (
    <div style={OVERLAY_STYLES} onClick={onClose}>
      <div style={MODAL_STYLES}>
        <button onClick={onClose}>Close Modal</button>
        {children}
      </div>
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
