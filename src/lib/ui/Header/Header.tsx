type Props = {
  children: string;
};

export const Header = ({ children }: Props) => {
  return <h1 className="text-3xl">{children}</h1>;
};
