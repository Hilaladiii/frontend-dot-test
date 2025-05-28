const Legend = ({ color, content }: { color: string; content: string }) => {
  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3  rounded ${color}`}></div>
      <span className="text-gray-600">{content}</span>
    </div>
  );
};

export default Legend;
