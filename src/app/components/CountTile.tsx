type Props = { title: string; count: number };

export const CountTile = ({ title, count }: Props) => {
  return (
    <div>
      <p className="text-3xl">{count}</p>
      <p>{title}</p>
    </div>
  );
};
