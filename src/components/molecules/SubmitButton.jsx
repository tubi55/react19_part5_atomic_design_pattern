import { useFormStatus } from "react-dom";
import Button from "../atoms/Button";

export default function SubmitButton({ handleReset }) {
  const { pending } = useFormStatus();

  return (
    <div className="flex gap-2 mt-2">
      <Button type="submit" disabled={pending} className="-hue-rotate-10">
        {pending ? "POSTING..." : "POST"}
      </Button>
      <Button onClick={handleReset} type="reset" className="-hue-rotate-40">
        CANCEL
      </Button>
    </div>
  );
}
