import PrimaryButton from "./primary";
import SmallButton from "./small";
import TextButton from "./text";
import IconButton from "./icon";

export { PrimaryButton, SmallButton, TextButton, IconButton };

export default function Button({
  children,
  disabled = false,
  className,
  ...rest
}) {
  const defaultClassNames =
    "w-full cursor-pointer transition ease-in-out duration-150 shadow";
  const disabledClassNames = "bg-gray-200 cursor-not-allowed";

  return (
    <button
      className={
        disabled
          ? disabledClassNames
          : className
          ? className
          : defaultClassNames
      }
      {...rest}>
      {children}
    </button>
  );
}
