import type { Component } from "solid-js";
import { cx } from "@/utils/cx";

interface CustomImageProps {
  class?: string;
  classes?: {
    root?: string;
    img?: string;
  };
  aspectRatio?: "square" | "video" | "portrait" | "auto";
  size?: "xs" | "md" | "lg" | "xl";
  src: string;
  alt?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  bordered?: boolean;
}

const maxWidthMap = {
  xs: "md:max-w-sm",
  md: "md:max-w-2xl",
  lg: "md:max-w-3xl",
  xl: "md:max-w-4xl",
};

const portraitMaxWidthMap = {
  xs: "md:max-w-xs",
  md: "md:max-w-md",
  lg: "md:max-w-xl",
  xl: "md:max-w-2xl",
};

/**
 * Responsive image:
 * - mobile: w-full
 * - desktop: constrained by `size` via max-width
 * - container controls aspect ratio
 * - img always object-cover and fills container
 */
export const CustomImage: Component<CustomImageProps> = (props) => {
  const ratioClass = () => {
    switch (props.aspectRatio ?? "auto") {
      case "square":
        return "aspect-square";
      case "video":
        return "aspect-video"; // 16/9 (Tailwind v3+)
      case "portrait":
        // 3 / 4 portrait (change if you prefer 4/5 etc.)
        return "aspect-[4/5]";
      case "auto":
      default:
        return ""; // let the image define height naturally (no forced ratio)
    }
  };

  const maxWidthClass = () => {
    const size = props.size ?? "md";
    const isPortrait = props.aspectRatio === "portrait";

    return isPortrait
      ? (portraitMaxWidthMap[size] ?? portraitMaxWidthMap.md)
      : (maxWidthMap[size] ?? maxWidthMap.md);
  };

  return (
    <div
      class={cx(
        // layout
        "w-full",
        maxWidthClass(),
        // aspect ratio / cropping container behavior
        ratioClass(),
        // optional: nice defaults (feel free to remove)
        "overflow-hidden",
        props.class,
        props.classes?.root,
      )}
    >
      <img
        src={props.src}
        alt={props.alt ?? ""}
        loading={props.loading ?? "lazy"}
        decoding={props.decoding ?? "async"}
        class={cx(
          // always cover + fill container when aspect ratio is set
          "object-cover",
          ratioClass() ? "h-full w-full" : "w-full h-auto",
          props.classes?.img,
        )}
      />
    </div>
  );
};
