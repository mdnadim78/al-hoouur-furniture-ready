import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost" | "secondary";
  size?: "sm" | "md" | "lg" | "icon";
};

export function Button({ variant = "default", size = "md", className, ...props }: ButtonProps) {
  const base = "inline-flex items-center justify-center gap-2 font-medium transition active:scale-[.98] disabled:opacity-50 disabled:pointer-events-none rounded-xl";
  const variants = {
    default: "bg-black text-white hover:bg-black/90",
    outline: "border border-black/15 hover:bg-black/5",
    ghost: "hover:bg-black/5",
    secondary: "bg-black/80 text-white hover:bg-black",
  };
  const sizes = {
    sm: "h-9 px-3 text-sm",
    md: "h-10 px-4 text-sm",
    lg: "h-11 px-6 text-base",
    icon: "h-10 w-10",
  };
  return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />;
}
