import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Button, Stack, OutlinedInput, InputAdornment } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

const StyledSearchBar = styled(OutlinedInput)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "4px",
  border: "1px solid #ccc",
  width: "300px",
  marginLeft: theme.spacing(2),
  "&:hover": {
    borderColor: "#00C26D",
  },
  "& .MuiOutlinedInput-input": {
    padding: "8px 14px",
    fontSize: "14px",
    fontFamily: "Roboto, sans-serif",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "#ccc",
  },
  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "#00C26D",
  },
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#00C26D",
  },
}));

export default function PrimarySearchAppBar() {
  const isMobile = useMediaQuery("(max-width:1100px)");

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "white", boxShadow: "-moz-initial" }}>
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "space-between",
            alignItems: "center",
            paddingX: { xs: 1, sm: 3 },
          }}
        >
          {/* Logo */}
          <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
            <Link to="/">
              <img
                src="/assets/techcareer-logo.svg"
                alt="logo"
                style={{
                  width: "auto",
                  height: "20px",
                  maxWidth: "190px",
                  paddingLeft: "300px",
                }}
              />
            </Link>
          </Box>

          {/* Main Content (Search and Buttons) */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* Desktop Search */}
            {!isMobile && (
              <StyledSearchBar
                placeholder="Etkinlik, İş ilanı, Blog ara"
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            )}

            {/* Desktop Buttons */}
            {!isMobile && (
              <Stack direction="row" spacing={1} sx={{ marginLeft: 2 }}>
                <Button variant="text" sx={{ color: "black", whiteSpace: "nowrap" }}>
                  Etkinlikler
                </Button>
                <Button variant="text" sx={{ color: "black", whiteSpace: "nowrap" }}>
                  İş ilanları
                </Button>
                <Button variant="text" sx={{ color: "black", whiteSpace: "nowrap" }}>
                  Eğitimler
                </Button>
                <Button variant="text" sx={{ color: "black", whiteSpace: "nowrap" }}>
                  Komünite
                </Button>
                <Button variant="text" sx={{ color: "black", whiteSpace: "nowrap" }}>
                  Şirketler
                </Button>
              </Stack>
            )}
          </Box>

          {/* "Giriş/Üye Ol" Button */}
          <Box sx={{
            display: "flex",
            alignItems: "center-right",
            justifyContent: "right",
            marginRight:"100px",
            flexGrow: { xs: 1, md: 0 }
          }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#00C26D",
                color: "white",
                whiteSpace: "nowrap",
                marginRight:"100px",
                "&:hover": { backgroundColor: "#00C26D" },
              }}
            >
              Giriş/Üye Ol
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
