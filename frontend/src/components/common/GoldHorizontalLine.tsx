type GoldHorizontalLineProps = {
  className?: string;
};

const GoldHorizontalLine = ({ className = "" }: GoldHorizontalLineProps) => {
  return (
    <hr
      className={`border-0 h-px bg-linear-to-r from-gold-accent to-transparent ${className}`}
    ></hr>
  );
};

export default GoldHorizontalLine;
