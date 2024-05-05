import { useState } from "react";
import { Box, Button } from "@mui/material";
import NameInput from "./NameInput";
import SortButton from "./SortButton";
import NameList from "./NameList";

const NameSorter = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [names, setNames] = useState<{ firstName: string; middleName: string; lastName: string }[]>([]);
  const [error, setError] = useState<string>("");

  const sortNames = () => {
    if (names.length < 2) {
      setError("Please provide at least two names.");
      return;
    }

    setNames([...names].sort((a, b) => {
        return a.firstName.localeCompare(b.firstName) || a.lastName.localeCompare(b.lastName);
    }));

    setError("");
  };


  const addName = () => {
    if (!firstName.trim() || !lastName.trim()) {
      setError("First name and last name are mandatory.");
      return;
    }
    setNames([...names, { firstName, middleName, lastName }]);
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setError("");
  };

  return (
    <Box maxWidth={600}>
      <h1>Name Sorter</h1>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <NameInput
          id="first-name"
          label="First Name"
          value={firstName}
          onChange={setFirstName}
        />
        <NameInput
          id="middle-name"
          label="Middle Name"
          placeholder="(Optional)"
          value={middleName}
          onChange={setMiddleName}
        />
        <NameInput
          id="last-name"
          label="Last Name"
          value={lastName}
          onChange={setLastName}
        />
      </Box>

      <Box 
        sx={{
          display: 'flex',
          gap: 1,
          justifyContent: 'center',
          mt: 1,
        }}
      >

        <Button 
          onClick={addName} 
          variant="contained" 
          color="primary"
        >
          Add Name
        </Button>

        { names.length >= 1 &&
          <SortButton 
            onClick={() => { sortNames(); }}
          />
        }

      </Box>

      { error && 
        <p>{ error }</p>
      }

      <NameList names={ names } />
    </Box>
  );
};

export default NameSorter;
