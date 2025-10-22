import { IRadioOption } from '@/interfaces/radio.interface';
import React from 'react';

interface RadioProps {
  name: string;
  options: IRadioOption[];
  selected: string | null;
  onChange: (value: string) => void;
}

const RadioGrup: React.FC<RadioProps> = ({
  name,
  options,
  selected,
  onChange,
}) => {
  return (
    <div>
      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-center gap-2 select-none"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selected === option.value}
            onChange={(e) => onChange(e.target.value)}
            className="h-4 w-4 rounded"
          />

          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export { RadioGrup };
