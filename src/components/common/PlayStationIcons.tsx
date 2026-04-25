interface IconProps {
  className?: string;
  size?: number;
}

export const SquareIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <filter id="neon-square" x="-200%" y="-200%" width="500%" height="500%" filterUnits="userSpaceOnUse">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur2" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur3" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur4" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="32" result="blur5" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="48" result="blur6" />
        <feMerge>
          <feMergeNode in="blur6" />
          <feMergeNode in="blur5" />
          <feMergeNode in="blur4" />
          <feMergeNode in="blur3" />
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect
      x="10"
      y="10"
      width="28"
      height="28"
      rx="7"
      stroke="white"
      strokeWidth="2.5"
      fill="none"
      filter="url(#neon-square)"
    />
  </svg>
);

export const CircleIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <filter id="neon-circle" x="-200%" y="-200%" width="500%" height="500%" filterUnits="userSpaceOnUse">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur2" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur3" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur4" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="32" result="blur5" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="48" result="blur6" />
        <feMerge>
          <feMergeNode in="blur6" />
          <feMergeNode in="blur5" />
          <feMergeNode in="blur4" />
          <feMergeNode in="blur3" />
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <circle cx="24" cy="24" r="14" stroke="white" strokeWidth="2.5" fill="none" filter="url(#neon-circle)" />
  </svg>
);

export const TriangleIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <filter id="neon-triangle" x="-200%" y="-200%" width="500%" height="500%" filterUnits="userSpaceOnUse">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur2" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur3" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur4" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="32" result="blur5" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="48" result="blur6" />
        <feMerge>
          <feMergeNode in="blur6" />
          <feMergeNode in="blur5" />
          <feMergeNode in="blur4" />
          <feMergeNode in="blur3" />
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path d="M24 10 L38 36 H10 Z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="none" filter="url(#neon-triangle)" />
  </svg>
);

export const CrossIcon = ({ className = '', size = 48 }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <filter id="neon-cross" x="-200%" y="-200%" width="500%" height="500%" filterUnits="userSpaceOnUse">
        <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur2" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur3" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="16" result="blur4" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="32" result="blur5" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="48" result="blur6" />
        <feMerge>
          <feMergeNode in="blur6" />
          <feMergeNode in="blur5" />
          <feMergeNode in="blur4" />
          <feMergeNode in="blur3" />
          <feMergeNode in="blur2" />
          <feMergeNode in="blur1" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <path d="M14 14 L34 34 M34 14 L14 34" stroke="white" strokeWidth="2.5" strokeLinecap="round" fill="none" filter="url(#neon-cross)" />
  </svg>
);
