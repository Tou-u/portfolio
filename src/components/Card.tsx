import { Card as CardUI, CardBody } from "@nextui-org/card";

export default function Card() {
  return (
    <CardUI
      isBlurred
      className="h-full border-none bg-background/60 dark:bg-default-100/50"
      shadow="sm"
    >
      <CardBody>
        <p>Make beautiful websites regardless of your design experience.</p>
      </CardBody>
    </CardUI>
  );
}
