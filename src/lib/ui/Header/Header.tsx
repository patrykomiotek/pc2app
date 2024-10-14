import { memo } from "react";

type Props = {
  children: string;
};

export const Header = memo(({ children }: Props) => {
  return <h1 className="text-3xl">{children}</h1>;
});

Header.displayName = "memo(Header)";
