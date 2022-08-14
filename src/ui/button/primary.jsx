import Button from "./";

export default function PrimaryButton({ children, ...rest }) {
  return (
    <Button
      className="font-thin border px-8 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md drop-shadow-sm"
      {...rest}>
      {children}
    </Button>
  );
}
