import Button from "./";

export default function IconButton({ children, Icon, ...rest }) {
  return (
    <Button
      {...rest}
      className="border bg-pink-500 text-white p-1 rounded-full">
      <div className={`flex items-center gap-2 ${children ? "px-3" : ""}`}>
        <div>
          <Icon className="w-6" />
        </div>
        {children ? children : undefined}
      </div>
    </Button>
  );
}
