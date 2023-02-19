import { styled } from "@mui/system";

export default styled((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    margin: "0 0 10px 0",
  },
  title: {
    marginBottom: "10px",
  },
  textarea: {
    padding: "10px",
    marginBottom: "10px",
  },
  footer: {
    marginTop: "10px",
  },
}));
