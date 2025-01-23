import { ArrowLeft } from "lucide-react";
import { Button } from "./ui/button";

export default function GoBack() {
  return (
    <div className="flex items-center justify-center">
      <Button
        variant="default"
        size="sm"
        className="bg-zinc-950 transition-colors duration-200 ease-in-out"
        onClick={() => window.history.back()}
      >
        <ArrowLeft className="size-6" />
      </Button>
    </div>
  );
}
