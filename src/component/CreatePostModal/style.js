import { styled } from "@mui/system";

export const PaperStyle = styled("div")({
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  position: "absolute",
  width: 400,
  backgroundColor: "#ccc",
  boxShadow: "0px 0px 23px 0px rgba(0,0,0,0.68);",
  padding: "8px 16px 12px",
});

export const FormStyle = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

export const HeaderStyle = styled("div")({
  margin: "0 0 10px 0",
});

export const TitleStyle = styled("div")({
  marginBottom: "10px",
  margin: "auto",
});
