"use client";

import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { login } from "../actions";

export const LoginForm = () => {
  const { push } = useRouter();

  const handleSubmit = async (formData: FormData) => {
    const result = await login(formData);
    if (result.success) {
      push("/profile");
    } else {
      toast.error("Fail");
    }
  };

  return (
    <form action={handleSubmit}>
      <div>
        <input name="login" placeholder="Login" />
      </div>
      <div>
        <input name="password" type="password" placeholder="Password" />
      </div>
      <div>
        <button type="submit">Send</button>
      </div>
    </form>
  );
};
