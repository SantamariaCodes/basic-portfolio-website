interface TypographyProps {
  variant: "h1" | "h2" | "body" | "button";
  color?: "default" | "primary" | "secondary";
  children: React.ReactNode;
}

const Typography: React.FC<TypographyProps> = ({
  variant,
  color = "default",
  children,
}) => {
  const classes = {
    h1: "text-3xl font-bold",
    h2: "text-2xl font-semibold",
    body: "text-base",
    button: "text-lg font-extrabold",
  };

  const colors = {
    default: "text-gray-800",
    primary: "text-blue-600",
    secondary: "text-red-600",
  };

  return (
    <span className={`${classes[variant]} ${colors[color]}`}>{children}</span>
  );
};

export default Typography;
