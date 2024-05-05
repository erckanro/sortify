import { List, ListItem, ListItemText } from "@mui/material";

interface NameListProps {
  names: { firstName: string; middleName: string; lastName: string }[];
}

const NameList = ({ names }: NameListProps) => {
  return (
    <List sx={{ mt: 1 }}>
      {names.map((name, index) => (
        <ListItem key={index}>
            <ListItemText>
                {name.firstName} {name.middleName && `${name.middleName} `}{name.lastName}
            </ListItemText>
        </ListItem>
      ))}
    </List>
  );
};

export default NameList;
