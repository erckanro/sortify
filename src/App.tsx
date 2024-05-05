import NameSorter from "./components/NameSorter";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box 
      className="App"
      sx={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      <NameSorter />
    </Box>
  );
};

export default App;
