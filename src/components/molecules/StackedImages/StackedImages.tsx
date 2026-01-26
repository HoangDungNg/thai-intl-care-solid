import { CustomImage } from "../../atoms/CustomImage";
import { Paragraph } from "../../atoms/Paragraph";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles.module.css";
import { onMount } from "solid-js";

export const StackedImages = () => {
  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
  });

  return (
    <div class="relative mt-25 min-h-210">
      {Array.from({ length: 5 }, (_, index) => (
        <div class={styles["container"]}>
          <Paragraph
            class="text-2xl flex-1 shrink-0 basis-0 max-w-1/3"
            data-img-info
          >
            Auctor aac nisl nulla, ut eget pulvinar nullam nam, ut praesent
            aenean. Pellentesque neque platea nulla et arcu erat lectus, non,
            porta dui ante. Posuere et, tristique, convallis cras nullam.
          </Paragraph>
          <div class={styles["img-wrapper"]}>
            <CustomImage
              size="md"
              aspectRatio="portrait"
              src={`https://picsum.photos/seed/picsum${index}/720/900`}
              classes={{
                img: "filter saturate-90 brightness-110",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
