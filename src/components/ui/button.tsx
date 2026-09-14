import type { ComponentProps } from "react";

export function Button({
  type = "button",
  className = "",
  ...props
}: ComponentProps<"button">) {
  return (
    <button type={type} className={`button-primary ${className}`} {...props} />
  );
}
