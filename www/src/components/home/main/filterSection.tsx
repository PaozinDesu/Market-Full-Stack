'use client';
import { RadioGrup } from '@/components/inputs/radioGroup';
import React from 'react';

interface FilterSectionProps {
  name: string;
}

const FilterSection: React.FC<FilterSectionProps> = ({ name }) => {
  const [selected, setSelected] = React.useState('1');

  return (
    <div className="bg-zinc-800 p-2">
      <h2>{name}</h2>
      <div className="flex pl-4">
        {name === 'Price' ? (
          <RadioGrup
            name={name}
            options={[
              { label: `$10.00 - $50.00`, value: `${name}1` },
              { label: `$50.00 - $100.00`, value: `${name}2` },
              { label: `$100.00 - $200.00`, value: `${name}3` },
              { label: `$200.00 - $300.00`, value: `${name}4` },
              { label: `$300.00 - $500.00`, value: `${name}5` },
              { label: `$500.00 - $750.00`, value: `${name}6` },
              { label: `$750.00 - $1000.00`, value: `${name}7` },
            ]}
            selected={selected}
            onChange={setSelected}
          />
        ) : (
          <RadioGrup
            name={name}
            options={[
              { label: `${name} 1`, value: `${name}1` },
              { label: `${name} 2`, value: `${name}2` },
              { label: `${name} 3`, value: `${name}3` },
              { label: `${name} 4`, value: `${name}4` },
              { label: `${name} 5`, value: `${name}5` },
              { label: `${name} 6`, value: `${name}6` },
              { label: `${name} 7`, value: `${name}7` },
            ]}
            selected={selected}
            onChange={setSelected}
          />
        )}
      </div>
    </div>
  );
};

export { FilterSection };
