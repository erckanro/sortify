import { Box, Button } from "@mui/material";
import { teal, cyan } from "@mui/material/colors";

interface IActionButtons{
    add: () => void;
    sort: () => void;
}

const ActionButtons = ({ add, sort }: IActionButtons) => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 1,
        justifyContent: 'center',
        mt: 2,
      }}
    >
      <Button
        onClick={add}
        variant="contained"
        sx={{
          width: 120,
          backgroundColor: teal[800],
            '&:hover': {
            backgroundColor: teal[900]
            }
        }}
      >
        Add Name
      </Button>

        <Button
            onClick={sort}
            variant="contained"
            sx={{
            width: 120,
            backgroundColor: cyan[800],
                '&:hover': {
                    backgroundColor: cyan[900]
                }
            }}
        >
            Sort
        </Button>
    </Box>
  );
};

export default ActionButtons;
