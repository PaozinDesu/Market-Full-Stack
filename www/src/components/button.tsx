interface ButtonProps {
  text: string;
  onClick: () => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  bgColor?: string;
  hoverColor?: string;
  textColor?: string;
}

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  icon,
  iconPosition = 'left',
  textColor = 'text-slate-500',
  bgColor = 'bg-slate-100',
  hoverColor = 'hover:bg-slate-200',
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-xl px-4 py-2 ${textColor} ${bgColor} transition ${hoverColor}`}
    >
      {icon && iconPosition === 'left' && <span>{icon}</span>}
      <span>{text}</span>
      {icon && iconPosition === 'right' && <span>{icon}</span>}
    </button>
  );
};

export { Button };
