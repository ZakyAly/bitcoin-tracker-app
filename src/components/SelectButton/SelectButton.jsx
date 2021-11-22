import { Button } from "@material-ui/core";

const SelectButton = ({ children, selected, onClick }) => {
  return (
    <Button
      style={{
        margin: 3,
        fontWeight: selected ? "bold" : "",
        fontSize: selected ? 20 : "",
        color: selected ? "yellow" : "",
      }}
      variant="outlined"
      onClick={onClick}
      selected={selected}
    >
      {children}
    </Button>
  );
};

export default SelectButton;
