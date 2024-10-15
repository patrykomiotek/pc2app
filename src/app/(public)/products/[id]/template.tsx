"use client";

import { useEffect } from "react";
import { setCookie } from "./actions";
import { useParams } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

export default function ProductTemplate({ children }: Props) {
  const params = useParams<{ id: string }>();

  const init = async () => {
    await setCookie(params.id);
  };

  useEffect(() => {
    init();
  }, []);

  return children;
}
