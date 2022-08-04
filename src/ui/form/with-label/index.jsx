import { useState } from "react";

export default function withLabel(Component) {
  return function WrappedComponent({ children, label, ...rest }) {
    const [clicked, setClicked] = useState(false);

    return (
      <div>
        <label
          className="text-white font-medium text-sm"
          onClick={() => setClicked(true)}>
          {label || children}
        </label>
        <Component focused={clicked} {...rest} />
      </div>
    );
  };
}
