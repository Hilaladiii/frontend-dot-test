import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import type React from "react";

interface CardQuizSetupLayoutProps {
  title: string;
  icon: React.ElementType;
  children: React.ReactNode;
}

const CardQuizSetupLayout = ({
  title,
  icon,
  children,
}: CardQuizSetupLayoutProps) => {
  const Icon = icon;
  return (
    <Card className="shadow-sm bg-white">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-medium">
          <Icon className="w-5 h-5 text-blue-600" />
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

export default CardQuizSetupLayout;
