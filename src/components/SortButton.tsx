import { Button } from "@mui/material";

interface SortButtonProps {
  onClick: () => void;
}

const SortButton = ({ onClick }: SortButtonProps) => {
  return (
    <Button 
        onClick={onClick} 
        variant="contained" 
        color="primary"
    >
        Sort Names
    </Button>
  );
};

export default SortButton;
