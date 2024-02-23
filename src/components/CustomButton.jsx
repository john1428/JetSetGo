import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function CustomButton() {
  return (
    <Stack direction="row">
      <Button variant="contained" color="success">
        Success
      </Button>
    </Stack>
  );
}
