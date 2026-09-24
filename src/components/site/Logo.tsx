import logoMark from "@/assets/logo-mark.png";

type LogoProps = {
  className?: string;
  /** Show wordmark text beside the mark (default true). */
  showWordmark?: boolean;
};

export function Logo({ className = "", showWordmark = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <span className="relative grid h-9 w-9 sm:h-10 sm:w-10 shrink-0 place-items-center rounded-lg border border-primary/25 bg-primary/5">
        <img
          src={logoMark}
          alt=""
          width={36}
          height={26}
          className="h-[22px] w-auto sm:h-6 object-contain"
          decoding="async"
        />
      </span>
      {showWordmark ? (
        <div className="flex flex-col leading-none">
          <span className="font-display text-base sm:text-lg font-bold tracking-tight">
            Flow<span className="text-primary">Accel</span>
          </span>
          <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-muted-foreground mt-0.5">
            Accelerate Workflows
          </span>
        </div>
      ) : (
        <span className="sr-only">Flowaccel</span>
      )}
    </div>
  );
}
