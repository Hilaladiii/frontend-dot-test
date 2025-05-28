interface StatsProps {
  background: string;
  icon: React.ElementType;
  color: string;
  count: number;
  text: string;
}

const Stats = ({ background, icon, color, count, text }: StatsProps) => {
  const Icon = icon;
  return (
    <div className={`text-center p-4 rounded-lg ${background}`}>
      <Icon className={`w-8 h-8 mx-auto mb-2 ${color}`} />
      <div className={`text-2xl font-bold ${color}`}>{count}</div>
      <div className="text-sm text-gray-600">{text}</div>
    </div>
  );
};

export default Stats;
