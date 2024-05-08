import { TextField } from "@mui/material";

interface INameInput {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

const NameInput = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  required = false,
}: INameInput) => {
  return (
    <TextField
      id={id}
      required={required}
      size="small"
      label={label}
      variant="filled"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      inputProps={{ style: { color: '#fff' } }}
      InputLabelProps={{
        style: { color: '#b2b2b2' }
    }}
    />
  );
};

export default NameInput;
