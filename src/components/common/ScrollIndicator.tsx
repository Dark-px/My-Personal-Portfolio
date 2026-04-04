const ScrollIndicator = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-8 left-1/2 z-40 -translate-x-1/2"
    >
      <div className="relative h-10 w-[2px] rounded-full bg-white/85">
        <span className="scroll-indicator-dot absolute left-1/2 top-0 h-[6px] w-[6px] -translate-x-1/2 rounded-full bg-white" />
      </div>
    </div>
  );
};

export default ScrollIndicator;
