import { TextField } from "@mui/material";

interface NameInputProps {
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
}: NameInputProps) => {
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
    />
  );
};

export default NameInput;
