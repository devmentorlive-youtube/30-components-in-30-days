import TextField from "@/ui/form/text-field";
import withLabel from "@/ui/form/with-label";
import { useState } from "react";


export default function InputWithAlertPage () {
  const [input, setInput] = useState("");
  const InputWithLabel = withLabel(TextField);

  const handleChange = () => {
    setInput(event.target.value);
  }

return (
  <div className="container w-[60%] mx-auto bg-white text-black p-4 my-8 rounded">
                           <h1 className="text-2xl">Input With Alert Example</h1>

    <div className="border rounded border-slate-800 mt-4 p-4">
        {/* create an input with label that sets the state of the input */}
        <InputWithLabel
            label="Input"
            value={input}
            onChange={handleChange}
           // alert={input.length > 0 ? "Input is not empty" : "Input is empty"}
        />

    </div>
  </div>

)

}

