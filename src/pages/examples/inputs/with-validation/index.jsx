import { useState } from "react";
import TextField from "@/ui/form/text-field";
import withLabel from "@/ui/form/with-label";
import withValidation from "@/ui/form/with-validation";


// Wrapped Components
const InputWithLabel = withLabel(TextField);
const InputWithValidation = withValidation(InputWithLabel);

export default function InputWithAlert() {
  const [text, setText] = useState("");
  const [touched, setTouched] = useState(false);
  const isGmail = (text) => text.includes("@gmail.com") ? "" : "Must be a gmail address"

  return (
    <div className="container w-[60%] mx-auto bg-gray-200 text-black p-4 my-8 rounded">
      <h1 className="text-2xl font-medium my-4">Input With Alert Example</h1>
      <p>Try entering a non-gmail address</p>
      <div className="border rounded border-slate-800 mt-4 p-4">
        {/* create an input with label that sets the state of the input */}
        <InputWithValidation value={text} 
        validations={[isGmail]}
        onChange={(value) => {setText(value)
        setTouched(true)
        }}>
          <span className="text-blue-600">Enter Your Email</span>
          </InputWithValidation>
      </div>
    </div>
  );
}
