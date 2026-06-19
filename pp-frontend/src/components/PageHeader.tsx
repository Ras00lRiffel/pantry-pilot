import type { ReactNode } from "react";

interface Props {
  title: string;
  action?: ReactNode;
}

export default function PageHeader({ title, action }: Props) {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>

      {action}
    </div>
  );
}
