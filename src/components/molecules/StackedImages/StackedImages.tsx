import { CustomImage } from "../../atoms/CustomImage";
import { Paragraph } from "../../atoms/Paragraph";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./styles.module.css";
import { onMount } from "solid-js";

export const StackedImages = () => {
  let root: HTMLDivElement;
  let allContent: Array<HTMLDivElement> = [];
  let paragraphs: Array<HTMLDivElement> = [];
  let allImages: Array<HTMLDivElement> = [];
  let tl: gsap.core.Timeline;

  onMount(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(paragraphs[0], { y: -50 });

    tl = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: root,
        pin: true,
        start: "top top",
        end: `+=${allContent.length * 50}%`,
        scrub: 2, // increase this value to make animation slower
      },
    });

    tl.to(allImages[0], { rotate: -3 }, 0);
    for (let i = 0; i < allContent.length; i++) {
      if (i === allContent.length - 1) {
        return;
      }
      tl.to(paragraphs[i], { opacity: 0, duration: 2 }, "+=0.5")
        .to(
          allImages[i],
          {
            scale: 1,
            duration: 2,
            y: (i + 1) * 5,
            x: (i + 1) * -5,
            opacity: 1,
            rotate: (i + 1) * 3 * (i % 2 === 0 ? 1 : -1),
          },
          "<",
        )
        .to(paragraphs[i + 1], { opacity: 1, y: -50, duration: 2 }, "<+=0.5");
    }
  });

  return (
    <div
      class="relative mt-25 min-h-210 overflow-hidden"
      ref={(ele) => (root = ele)}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <div class={styles["container"]} ref={(el) => (allContent[index] = el)}>
          <Paragraph
            class="text-2xl flex-1 shrink-0 basis-0 max-w-1/3"
            data-img-info
            ref={(el: HTMLDivElement) => (paragraphs[index] = el)}
          >
            Auctor aac nisl nulla, ut eget pulvinar nullam nam, ut praesent
            aenean. Pellentesque neque platea nulla et arcu erat lectus, non,
            porta dui ante. Posuere et, tristique, convallis cras nullam.
          </Paragraph>
          <div
            class={styles["img-wrapper"]}
            ref={(el) => (allImages[index] = el)}
          >
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
