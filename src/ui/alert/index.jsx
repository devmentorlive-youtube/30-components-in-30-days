import { useEffect } from "react";

export default function Alert({ children, show = false, onHide = () => {} }) {
  useEffect(() => {
    if (!show) return;

    setTimeout(() => {
      onHide();
    }, 3000);
  }, [show]);

  return (
    <div
      className={`absolute z-40 top-6 right-0  text-white  bg-pink-500 py-3 px-5 transition-all duration-[2s] ${
        show ? "opacity-90" : "opacity-0"
      }`}>
      {children}
    </div>
  );
}
