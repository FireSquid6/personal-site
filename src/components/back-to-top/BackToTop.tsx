import "./BackToTop.css";
import { useState } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="back-to-top"
      onClick={scrollToTop}
      style={{
        opacity: visible ? 1 : 0,
      }}
    >
      Back to top
    </button>
  );
}
