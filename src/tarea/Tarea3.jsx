export function UncontrolledCheckbox(props) {
  return (
    <div>
      <input
        type="checkbox"
        name={props.name}
        defaultChecked={props.initialValue}
        onChange={(event) => props.onChange(event.target.checked)}
      />
      {props.name}
    </div>
  );
}

export function CheckboxList(props) {
  return (
    <div>
      {Object.entries(props.items).map(([name, initialValue]) => (
        <UncontrolledCheckbox
          key={name}
          name={name}
          initialValue={initialValue}
          onChange={(value) => console.log(`${name} changed:`, value)}
        />
      ))}
    </div>
  );
}
