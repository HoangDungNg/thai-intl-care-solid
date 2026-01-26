import type { Component, JSX, ValidComponent } from "solid-js";
import { Dynamic } from "solid-js/web";
import { cx } from "@/utils/cx";

interface TitleProps {
  class?: string; // Solid uses `class`
  children: JSX.Element;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: ValidComponent; // e.g. "h1", "div", custom component
}

const TITLE_LEVEL_CLASS: Record<1 | 2 | 3 | 4 | 5 | 6, string> = {
  6: "text-lg",
  5: "text-xl",
  4: "text-2xl",
  3: "text-3xl",
  2: "text-4xl",
  1: "text-5xl",
};

export const Title: Component<TitleProps> = (props) => {
  const level = () => props.level ?? 1;
  const as = () => props.as ?? "div";

  return (
    <Dynamic
      component={as()}
      class={cx(TITLE_LEVEL_CLASS[level()], "font-bold", props.class)}
    >
      {props.children}
    </Dynamic>
  );
};
