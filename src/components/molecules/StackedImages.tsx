import { CustomImage } from "../atoms/CustomImage";
import { Paragraph } from "../atoms/Paragraph";

export const StackedImages = () => {
  return (
    <div class="relative mt-25 min-h-210">
      {Array.from({ length: 5 }, (_, index) => (
        <div class="absolute inset-0 w-full h-full flex justify-center items-center">
          <Paragraph class="flex-1 shrink-0 basis-0 max-w-1/3">
            Auctor aac nisl nulla, ut eget pulvinar nullam nam, ut praesent
            aenean. Pellentesque neque platea nulla et arcu erat lectus, non,
            porta dui ante. Posuere et, tristique, convallis cras nullam.
          </Paragraph>
          <div class="p-4 rounded-[10px] bg-white shadow-card">
            <CustomImage
              size="md"
              aspectRatio="portrait"
              src={`https://picsum.photos/seed/picsum${index}/720/900`}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
