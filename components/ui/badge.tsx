import React from "react";
import clsx from "clsx";

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={clsx("inline-flex items-center rounded-full bg-black/80 text-white text-xs px-3 py-1", className)} {...props} />;
}
