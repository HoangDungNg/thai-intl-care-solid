import type { Component, JSX, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";
import { cx } from "@/utils/cx";

interface TextProps {
  class?: string; // Solid uses `class`, not `className`
  children: JSX.Element; // Solid JSX children type
  as?: ValidComponent; // "div" | "p" | custom component, etc.
}

export const Paragraph: Component<TextProps> = ({
  as: asComponent,
  class: className,
  children,
  ...rest
}) => {
  const as = () => asComponent ?? "div";

  return (
    <Dynamic
      component={as()}
      class={cx("text-base font-light", className)}
      {...rest}
    >
      {children}
    </Dynamic>
  );
};
