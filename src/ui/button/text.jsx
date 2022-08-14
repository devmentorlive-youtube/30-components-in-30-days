import Button from "./";

export default function TextButton({ children, ...rest }) {
  return (
    <Button
      className="font-thin px-8 py-2  hover:text-blue-600 drop-shadow-sm"
      {...rest}>
      {children}
    </Button>
  );
}
