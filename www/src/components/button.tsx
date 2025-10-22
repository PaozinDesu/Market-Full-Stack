interface ButtonProps {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  iconPosition = 'left',
}) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-center gap-2 rounded px-4 py-2 text-slate-500 transition hover:bg-slate-200"
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

export { Button };
