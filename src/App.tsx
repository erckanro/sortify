import { Box } from "@mui/material";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NameSorter from "./components/Sort";

const App = () => {
  return (
    <Box className="App" sx={{ display: "flex", justifyContent: "center" }}>
      <NameSorter />
      <ToastContainer />
    </Box>
  );
};

export default App;
