import { Brain } from "lucide-react";

const Loading = () => {
  return (
    <div className="bg-primary absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 animate-bounce items-center justify-center rounded-xl p-4">
      <Brain className="size-10 animate-pulse text-white" />
    </div>
  );
};

export default Loading;
