
interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button onClick={onClick} className={`cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

export default Button;
