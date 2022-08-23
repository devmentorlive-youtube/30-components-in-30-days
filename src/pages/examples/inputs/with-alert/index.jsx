import { useState } from "react";
import TextField from "@/ui/form/text-field";
import withLabel from "@/ui/form/with-label";
import Alert from "@/ui/alert";

// Wrapped Components
const InputWithLabel = withLabel(TextField);

export default function InputWithAlert() {
  const [text, setText] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const checkInput = () => {
    text.includes("@gmail.com") ? setShowAlert(true) : setShowAlert(false);
  };

  const errorClass = showAlert
    ? "font-medium text-red-500 transition-all duration-[2s]"
    : "font-medium text-blue-600 transition-all duration-[2s]";
  return (
    <div className="container w-[60%] mx-auto bg-gray-200 text-black p-4 my-8 rounded">
      <h1 className="text-2xl font-medium">Input With Alert Example </h1>
      <p>Try entering an gmail address</p>
      <div className="border rounded border-slate-800 mt-4 p-4">
        {/* create an input with label that sets the state of the input */}
        <InputWithLabel onKeyUp={checkInput} value={text} onChange={setText}>
          <span className={errorClass}>Enter Your Email</span>
        </InputWithLabel>
        <Alert show={showAlert} onHide={() => setShowAlert(false)}>
          Business Email Only
        </Alert>
      </div>
    </div>
  );
}
