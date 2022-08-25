import { useState } from "react";
import TextField from "@/ui/form/text-field";
import withLabel from "@/ui/form/with-label";
import withValidation from "@/ui/form/with-validation";
import Head from "next/head";

// Wrapped Components
const InputWithLabel = withLabel(TextField);
const InputWithValidation = withValidation(InputWithLabel);

export default function InputWithAlert() {
  const [text, setText] = useState("");
  const [touched, setTouched] = useState(false);
  const isGmail = (text) =>
    text.includes("@gmail.com") ? "" : "Must be a gmail address";

  return (
    <div className="container w-[40%] mx-auto bg-gray-600 text-white p-8 my-8 rounded">
      <Head>
        <title>Input with validation</title>
      </Head>
      <h1 className="header-one">Input With Alert Example</h1>
      <p className="font-light">Try entering a non-gmail address</p>
      <div className="border rounded border-gray-800 mt-4 p-4">
        {/* create an input with label that sets the state of the input */}
        <InputWithValidation
          value={text}
          validations={[isGmail]}
          onChange={(value) => {
            setText(value);
            setTouched(true);
          }}
        >
          <span className="text-white">Enter Your Email</span>
        </InputWithValidation>
      </div>
    </div>
  );
}
