import { Stack } from "@mui/material";
import React from "react";
import { categories } from "../utils/constants";

const SideBar = ({ selectedCategory, setSeclectedCategory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {categories.map((category) => (
      <button
        className="category-btn"
        onClick={() => setSeclectedCategory(category.name)}
        style={{
          backgroundColor: selectedCategory === category.name && "#2196f3",
          color: "#fff",
          gap: "15px",
        }}
        key={category.name}
      >
        <span
          style={{
            color: selectedCategory === category.name ? "white" : '#2196f3',
          }}
        >
          {category.icon}
        </span>
        <span
          style={{
            opacity: selectedCategory === category.name ? "1" : "0.8",
          }}
        >
          {category.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
