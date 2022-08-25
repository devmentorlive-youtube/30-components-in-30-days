import Head from "next/head";
import { useState } from "react";
import Button from "@/ui/button";
import Alert from "@/ui/alert";

export default function ButtonWithAlert() {
  const [showAlert, setShowAlert] = useState(false);
  const [buttonText, setButtonText] = useState("Enter the server");
  function serverEntry() {
    setButtonText("Loading...");
    setTimeout(() => {
      setShowAlert(true);
      setButtonText("Enter the server");
    }, 4000);
  }
  return (
    <div className="w-[100%] h-[100vh] flex items-center">
      <Head>
        <title>Button With Alert</title>
      </Head>
      <div className="p-8 w-[50%] mx-auto bg-white text-center rounded">
        <div className="w-[100px] h-[100px] bg-red-600 mx-auto rounded-full flex items-center justify-center">
          <span className="text-2xl text-white font-medium">D</span>
        </div>
        <h1 className="header-one font-semibold">Devmentorlive Server</h1>
        <p>Please note it will take about 5 seconds to let you in.</p>
        <div className="mt-4">
          <Button
            className="p-4 bg-green-700 rounded text-white hover:bg-green-600 hover:scale-125 transition-all ease-in-out duration-200 "
            onClick={() => serverEntry()}
          >
            {buttonText}
          </Button>
        </div>
        <Alert show={showAlert} onHide={() => setShowAlert(false)}>
          Server Access Denied. Please try again!
        </Alert>
      </div>
    </div>
  );
}
