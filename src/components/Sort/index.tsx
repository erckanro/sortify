import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { toast } from 'react-toastify';
import SwapVertIcon from '@mui/icons-material/SwapVert';
import { sortNames, addName } from "../helpers";
import { ActionButtons, NameList, NameInput } from "./components";

const NameSorter = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [middleName, setMiddleName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [names, setNames] = useState<{ firstName: string; middleName: string; lastName: string }[]>([]);
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<string>("");

  useEffect(() => {
    if (error) {
      toast.error(error, {
        theme: "dark",
      });
      setError("");
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      toast.success(success, {
        theme: "dark",
      });
      setSuccess("");
    }
  }, [success]);

  const add = () => {
    const { updatedNames, errorMessage } = addName(firstName, middleName, lastName, names);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setNames(updatedNames);
      setSuccess("Name has been added!");
      setFirstName("");
      setMiddleName("");
      setLastName("");
    }
  };

  const sort = () => {
    const { sortedNames, errorMessage } = sortNames(names);
    if (errorMessage) {
      setError(errorMessage);
    } else {
      setNames(sortedNames);
      setSuccess("Data has been sorted.");
    }
  };

  return (
    <Box 
      sx={{
        position: 'relative',
        maxWidth: 600,
        width: 600,
        height: 600,
        padding: '30px 20px',
        borderRadius: 10,
        backgroundColor: 'rgba(51, 51, 51, 0.5)',
        backdropFilter: 'blur(10px)',
        fontFamily: 'Roboto, sans-serif',
        color: '#fff'
      }}
    >
      <Typography variant="h4" sx={{ mb: 2}}>
        Sortify
        <SwapVertIcon color="success" sx={{ fontSize: 40}}/>
      </Typography>
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

      <ActionButtons add={add} sort={sort} />

      { names.length ?
        <NameList names={names} /> : 
        <Box
          sx={{
            position: "absolute",
            top: { xs: "70%", sm: "60%" },
            left: "50%",
            width: 250,
            transform: "translate(-50%, -50%)",
            textAlign: "center"
          }}
        >
          <img src="/no-data-bro.png" style={{ width: "100%" }}/>
          <Typography variant="h5" sx={{ mb: 1}}>
            No data yet...
          </Typography>
          <Typography>
            Add names to start the magic!
          </Typography>
        </Box>
      }
    </Box>
  );
};

export default NameSorter;
