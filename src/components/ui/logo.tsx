import { cn } from "@/lib/utils";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div>
      <img
        src="/icon.svg"
        alt="logo"
        className={cn("mx-auto mb-3 size-18", className)}
      />
    </div>
  );
};

export default Logo;
