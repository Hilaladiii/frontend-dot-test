import Logo from "@/components/ui/logo";

const Loading = () => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-bounce">
      <Logo />
    </div>
  );
};

export default Loading;
