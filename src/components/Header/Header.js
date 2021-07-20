import React from "react";
import {
  Typography
} from "@material-ui/core";
function Header(props) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "5px",
        borderTop: "10px solid  rgb(3, 169, 244)",
        padding: "20px",
      }}
    >
      <Typography variant="h4">JavaScript Quiz</Typography>
      <Typography variant="h6" style={{ marginTop: "10px" }}>
        Attempt All Questions
      </Typography>
    </div>
  );
}

export default Header;
