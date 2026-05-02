export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 320 120"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Double A Hoops Academy Logo"
      role="img"
    >
      {/* Orange circle */}
      <circle cx="55" cy="60" r="52" fill="#F97316" />
      {/* AA text */}
      <text
        x="55"
        y="73"
        textAnchor="middle"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="38"
        fill="white"
      >
        AA
      </text>
      {/* Wordmark */}
      <text
        x="122"
        y="38"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="26"
        fill="#F97316"
      >
        DOUBLE A
      </text>
      <text
        x="122"
        y="68"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="26"
        fill="#1a1a1a"
      >
        HOOPS
      </text>
      <text
        x="122"
        y="98"
        fontFamily="Arial Black, sans-serif"
        fontWeight="900"
        fontSize="26"
        fill="#888"
      >
        ACADEMY
      </text>
    </svg>
  );
}
