interface SwooshSVGProps {
  variant?: 'hero' | 'cta';
  className?: string;
}

export default function SwooshSVG({ variant = 'hero', className = '' }: SwooshSVGProps) {
  if (variant === 'cta') {
    return (
      <svg
        viewBox="0 0 400 300"
        aria-hidden="true"
        className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M -50 300 Q 200 -60 500 200"
          stroke="rgba(200,150,10,0.07)"
          strokeWidth="120"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M -20 280 Q 220 -40 520 220"
          stroke="rgba(30,69,133,0.09)"
          strokeWidth="70"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 400 420"
      aria-hidden="true"
      className={`absolute pointer-events-none ${className}`}
      style={{
        right: '-30px',
        top: '-20px',
        width: '54%',
        height: '130%',
      }}
    >
      <path
        d="M 30 440 Q 210 -30 420 290"
        stroke="rgba(200,150,10,0.11)"
        strokeWidth="80"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 70 420 Q 240 -50 430 270"
        stroke="rgba(30,69,133,0.22)"
        strokeWidth="52"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M 100 400 Q 270 -30 440 285"
        stroke="rgba(255,255,255,0.025)"
        strokeWidth="130"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
