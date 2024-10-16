"use client";

import { usePathname, useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";

export const SearchProductsForm = () => {
  const { replace } = useRouter();
  const pathName = usePathname();

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const params = new URLSearchParams();
    const value = event.target.value;
    if (value) {
      params.set("query", value);
    } else {
      params.delete("query");
    }
    console.log({ value });
    const newUrl = `${pathName}?${params.toString()}`;
    console.log({ newUrl });

    replace(newUrl);
  };

  return (
    <div>
      <input
        placeholder="Search..."
        className="bg-white border-2 text-black border-blue-500"
        onChange={handleChange}
      />
    </div>
  );
};
