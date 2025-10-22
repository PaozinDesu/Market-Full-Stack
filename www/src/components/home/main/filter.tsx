'use client';

import React from 'react';
import { FilterSection } from './filterSection';

const Filters: React.FC = () => {
  return (
    <div className="grid grid-rows-[30px_1fr_1fr_1fr] gap-2 overflow-y-scroll rounded-tl-xl bg-zinc-900 p-4">
      <h1 className="text-2xl font-semibold text-slate-200">Filter</h1>
      <FilterSection name="Brand" />
      <FilterSection name="Price" />
    </div>
  );
};

export { Filters };
