interface HeaderResultProps {
  message: string;
  color: string;
  icon: React.ElementType;
}

const HeaderResult = ({ message, color, icon }: HeaderResultProps) => {
  const Icon = icon;
  return (
    <div className="text-center mb-8 pt-8">
      <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-3xl mb-4">
        <Icon className="w-10 h-10 text-white" />
      </div>
      <h1 className="text-4xl font-semibold text-gray-900 mb-2">
        Quiz Complete!
      </h1>
      <p className={`text-xl ${color} font-medium`}>{message}</p>
    </div>
  );
};

export default HeaderResult;
