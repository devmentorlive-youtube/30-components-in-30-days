import Button, {
  PrimaryButton,
  SmallButton,
  TextButton,
  IconButton,
} from "@/ui/button";
import { ArrowCircleUpIcon } from "@heroicons/react/solid";

export default function ButtonsExample({}) {
  return (
    <div className="flex items-center gap-4 md:w-1/2 mx-auto m-8 p-8 bg-white">
      <div>
        <Button>Abstract "Class"</Button>
      </div>
      <div>
        <PrimaryButton>Primary button</PrimaryButton>
      </div>
      <div>
        <SmallButton>Small button</SmallButton>
      </div>
      <div>
        <TextButton>Text button</TextButton>
      </div>
      <div>
        <IconButton Icon={ArrowCircleUpIcon} />
      </div>
      <div>
        <IconButton Icon={ArrowCircleUpIcon}>Icon with text</IconButton>
      </div>
    </div>
  );
}
