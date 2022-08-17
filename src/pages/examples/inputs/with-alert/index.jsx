import TextField from "@/ui/form/text-field";
import withLabel from "@/ui/form/text-field";



export default function InputWithAlertPage () {

  const InputWithLabel = withLabel(TextField);

return (
  <div className="container w-[60%] mx-auto bg-white text-black p-4 my-8 rounded">
    <h1 className="text-2xl">Input With Alert Example</h1>

    <div className="border rounded border-slate-800 mt-4 p-4">
    
      <InputWithLabel label="" value="" onChange={() => {}}></InputWithLabel>

    </div>
  </div>

)

}

