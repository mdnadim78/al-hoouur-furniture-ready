import React from "react";
import clsx from "clsx";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: Props) {
  return <input className={clsx("w-full h-10 rounded-xl border px-3 text-sm outline-none focus:ring-2 focus:ring-black/10", className)} {...props} />;
}
