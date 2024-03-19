import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    className="backgroundTwo"
    sx={{
      position: "sticky",
      top: "0",
    }}
  >
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: "0",
        justifyContent: "space-between",
        background: "rgba(0, 0, 0, 0.0)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1) !important",
        backdropFilter: "blur(8.4px) !important",
        border: "1px solid rgba(15, 15, 15, 0.2)",
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar />
    </Stack>
  </Stack>
);

export default Navbar;
