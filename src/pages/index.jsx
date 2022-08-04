import { useState } from "react";

import Alert from "@/ui/alert";
import Button from "@/ui/button";
import SmallButton from "@/ui/button/small";
import Modal from "@/ui/modal";
import TextField from "@/ui/form/text-field";
import IntegerField from "@/ui/form/integer-field";
import DecimalField from "@/ui/form/decimal-field";
import Slider from "@/ui/slider";

import NextPage from "@/ui/next/page";
import withLayout from "@/ui/next/with-layout";

import withLabel from "@/ui/form/with-label";
import withConfirmation from "@/ui/with-confirmation";

const LabeledTextField = withLabel(TextField);
const LabeledIntegerField = withLabel(IntegerField);
const LabeledDecimalField = withLabel(DecimalField);

const ConfirmButton = withConfirmation(Button);

const Page = withLayout(NextPage);

export default function Homepage() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [decimal, setDecimal] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [slider, setSlider] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  return (
    <Page
      title="30 components in 30 days"
      description="Learn React (and Next) and Tailwind by building 30 simple components in 30 days.">
      <div className="mt-16 container mx-auto flex flex-col gap-4">
        <LabeledTextField value={text} onChange={setText} label="Text" />
        <LabeledIntegerField
          value={number}
          onChange={setNumber}
          label="Number"
        />
        <LabeledDecimalField
          value={decimal}
          onChange={setDecimal}
          label="Decimal"
        />

        <ConfirmButton
          renderItem={() => <div>Some record or item</div>}
          onConfirm={() => alert("confirmed dude!")}>
          <div className="text-white font-medium text-sm">Confirm?</div>
        </ConfirmButton>

        <SmallButton onClick={() => setShowModal(true)}>Show modal</SmallButton>
        <Modal isOpen={showModal} close={() => setShowModal(false)}>
          <p>
            Howdy, I am simply a modal, you can canel me or if there was a
            button in here you could do something, and then close it!
          </p>
        </Modal>

        <Slider value={slider} onChange={setSlider} />

        <div className="relative my-6">
          <Button onClick={() => setShowAlert(true)}>show alert</Button>

          <Alert show={showAlert} onHide={() => setShowAlert(false)}>
            This is an alert
          </Alert>
        </div>
      </div>
    </Page>
  );
}
