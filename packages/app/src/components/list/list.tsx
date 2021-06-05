import React from 'react';

interface IListItem {
  title: string;
  state: boolean;
}

interface IProps {
  items: IListItem[];
  onChange: (item: string) => void;
}

function List({ items, onChange }: IProps) {
  return (
    <ul>
      {items.length > 0 &&
        items.map(({ title, state }: IListItem) => (
          <li key={title}>
            <label>
              <input
                type="checkbox"
                name="state"
                value={title}
                checked={state}
                onChange={() => onChange(title)}
              />
              {title}
            </label>
          </li>
        ))}
    </ul>
  );
}

export default List;
