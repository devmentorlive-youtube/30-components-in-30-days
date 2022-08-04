import { useRef, useEffect } from "react";

export default function Slider({
  value,
  onChange = () => {},
  vertical = false,
  dotClassName = "bg-blue-800 border border-white w-[20px] h-[20px]",
  sliderClassName = "w-full",
  barClassName = "bg-blue-200 w-full h-[20px]",
}) {
  const slider = useRef(undefined);
  const dot = useRef(undefined);

  useEffect(() => {
    if (!dot.current || !slider.current) return;

    dot.current.addEventListener("pointerdown", handlePointerDown);
    slider.current.addEventListener("pointerdown", handlePointerDown);

    return () =>
      dot.current?.removeEventListener("pointerdown", handlePointerDown);
  }, [dot, slider]);

  function handlePointerDown(e) {
    window.addEventListener("pointerup", handlePointerUp);
    window.addEventListener("pointermove", handlePointerMove);
  }

  function handlePointerUp(e) {
    window.removeEventListener("pointerup", handlePointerUp);
    window.removeEventListener("pointermove", handlePointerMove);
  }

  function handlePointerMove(e) {
    const { max, min, floor } = Math;
    const { height, bottom, left, width } =
      slider.current.getBoundingClientRect();
    const base = floor(
      max(
        0,
        min(
          100,
          (vertical
            ? (e.screenY - bottom) / height
            : (e.screenX - left) / width) * 100
        )
      )
    );
    onChange(vertical ? 100 - base : base);
  }

  return (
    <div className={sliderClassName} ref={slider}>
      <div className="relative w-full h-full">
        <div
          className={`${barClassName} absolute cursor-pointer `}
          style={vertical ? { height: `${value}%` } : { width: `${value}%` }}
        />
        <div
          className={`${dotClassName} absolute cursor-pointer`}
          style={vertical ? { bottom: `${value}%` } : { left: `${value}%` }}
          ref={dot}
        />
      </div>
    </div>
  );
}
