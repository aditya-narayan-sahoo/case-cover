import { cn } from "@/lib/utils";
import Phone from "../Phone";
import { POSSIBLE_ANIMATION_DELAYS } from "@/utils/constants";

interface ReviewProps extends React.HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
}
export default function Review({ imgSrc, className, ...props }: ReviewProps) {
  const animationDelay =
    POSSIBLE_ANIMATION_DELAYS[
      Math.floor(Math.random() * POSSIBLE_ANIMATION_DELAYS.length)
    ];

  return (
    <div
      className={cn(
        "animate-fade-in rounded-[2.25rem] bg-white p-6 opacity-0 shadow-xl shadow-slate-900/5",
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <Phone imgSrc={imgSrc} />
    </div>
  );
}
