import { useState } from "react";
import { Alert, Button, Snackbar } from "@mui/material";

const TextBar = (msg: string, isOpen: boolean) => {
  const [open, setOpen] = useState(isOpen);
  const handleClick = () => {
    setOpen(!open);
  };
  const action = (
    <>
      <Button color="secondary" size="small" onClick={handleClick}>
        UNDO
      </Button>
    </>
  );
  return (
    <>
      {/* <Button onClick={handleClick}>Open simple snackbar</Button> */}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClick}
        action={action}
      >
        <Alert onClose={handleClick} severity="success">
          {msg}
        </Alert>
      </Snackbar>
    </>
  );
};
export default TextBar;
