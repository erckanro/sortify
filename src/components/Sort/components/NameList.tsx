import { List, ListItem, ListItemText } from "@mui/material";

interface INameList {
  names: { firstName: string; middleName: string; lastName: string }[];
}

const NameList = ({ names }: INameList) => {
  return (
    <List sx={{ mt: 1, position: 'relative', height: { xs: 300, sm: 380 }, overflow: 'scroll' }}>
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
