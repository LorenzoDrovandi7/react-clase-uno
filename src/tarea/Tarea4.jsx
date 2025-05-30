import { useState } from "react";

export function ControlledCheckbox(props) {
  const { name, value, onChange } = props;

  return (
    <label>
      <input type="checkbox" checked={value} onChange={(e) => onChange(name, e.target.checked)} />
      {name}
    </label>
  );
}

export function CheckboxListWithState(props) {
  const { items, onChange } = props;
  const [state, setState] = useState(items);

  const handleCheckboxChange = (name, value) => {
    const newState = { ...state, [name]: value };
    setState(newState);
    if (onChange) onChange(name, value);
  };

  return (
    <div>
      {Object.entries(state).map(([name, value]) => (
        <ControlledCheckbox key={name} name={name} value={value} onChange={handleCheckboxChange} />
      ))}
    </div>
  );
}
