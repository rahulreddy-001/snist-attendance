import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

export default function Load() {
  const [time, setTime] = React.useState(60);
  React.useEffect(() => {
    setTimeout(() => {
      setTime((time) => time - 1);
    }, 1000);
  }, [time]);
  return (
    <Stack spacing={1} style={{ padding: 40, height: "85vh" }}>
      <Skeleton variant="rectangular" width={"auto"} height={50} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="rectangular" width={60} height={60} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <h5
        style={{
          color: "grey",
          margin: "auto",
          marginBottom: "10px",
          marginTop: "20px",
        }}
      >
        Your dashboard will be available in {time} seconds
      </h5>
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="rounded" width={250} height={60} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
      <Skeleton variant="rounded" width={"auto"} height={100} />
    </Stack>
  );
}
