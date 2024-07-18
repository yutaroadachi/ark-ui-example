import { Avatar as ArkAvatar } from "@ark-ui/react";

type Props = {
  src: string;
  alt: string;
};

export const Avatar = (props: Props) => (
  <ArkAvatar.Root className="Avatar">
    <ArkAvatar.Fallback className="Avatar__Fallback">
      Not Found
    </ArkAvatar.Fallback>
    <ArkAvatar.Image
      src={props.src}
      alt={props.alt}
      className="Avatar__Image"
    />
  </ArkAvatar.Root>
);
