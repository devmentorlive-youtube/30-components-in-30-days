import Button from "@/ui/button";
import withConfirmation from "@/ui/with-confirmation";

const ButtonWithConfirmation = withConfirmation(Button);

export default function ButtonWithConfirmationExample({}) {
  function undoableAction() {
    alert("ok");
  }
  return (
    <div>
      <ButtonWithConfirmation onConfirm={undoableAction}>
        delete
      </ButtonWithConfirmation>
    </div>
  );
}
