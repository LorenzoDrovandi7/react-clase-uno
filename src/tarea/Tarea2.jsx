import { useState } from "react";

export function MatchNombre(props) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  const className = value.trim().toLowerCase() === props.nombre.trim().toLowerCase() ? "input input-match" : "input";

  return <input type="text" value={value} onChange={handleChange} className={className} />;
}

export function PasswordInput(props) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  const className = value.length < props.minLength ? "input input-match" : "input";

  return <input type="password" value={value} onChange={handleChange} className={className} />;
}

export function ValidationInput(props) {
  const [value, setValue] = useState("");

  function handleChange(event) {
    setValue(event.target.value);
  }

  const isValid = props.validation(value);
  const className = isValid ? "input" : "input input-match";
  const inputType = props.isPassword ? "password" : "text";

  return <input type={inputType} value={value} onChange={handleChange} className={className} />;
}
