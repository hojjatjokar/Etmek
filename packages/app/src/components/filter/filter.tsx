import React from 'react';

interface IProps {
  filters: string[];
  setFilter: (filter: string) => void;
  activeFilter: string;
}

function Filter({ filters, setFilter, activeFilter }: IProps) {
  return (
    <section>
      Show:
      {filters.map(filter => (
        <div
          key={filter}
          onClick={() => {
            if (activeFilter === filter) return;
            setFilter(filter);
          }}
          style={{ fontWeight: activeFilter === filter ? 'bold' : 'normal' }}
        >
          {filter}
        </div>
      ))}
    </section>
  );
}

export default Filter;
