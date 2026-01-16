import { useState } from "react";
import VimiChat from "./VimiChat";
import "./VimiChat.css";

export default function VimiWidget() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Button (ALWAYS VISIBLE) */}
      <button
        className="vimi-float-btn"
        onClick={() => setOpen(!open)}
      >
        💬
      </button>

      {/* Chat Window */}
      {open && <VimiChat onClose={() => setOpen(false)} />}
    </>
  );
}