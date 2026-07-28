import { Card, Divider, Stack } from "@mui/material";

const Appearance = () => {
  return (
    <Card sx={{ p: 2, display: "flex", flexDirection: "column", gap: 2 }}>
      <Stack sx={{ gap: 0.5 }}></Stack>
      <Divider />
    </Card>
  );
};

export default Appearance;
