import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Dropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const router = useRouter();
  const path = router.pathname;
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className="md:!hidden">
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className="!capitalize !text-white"
      >
        <RiMenu4Fill className="text-2xl text-black dark:text-white" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <div>
          {path === "/" || (
            <Link href="/">
              <MenuItem>Home</MenuItem>
            </Link>
          )}
        </div>
        <div>
          {path === "/crew" || (
            <Link href="/crew">
              <MenuItem>Crew</MenuItem>
            </Link>
          )}
        </div>
        <div>
          {path === "/destinations" || (
            <Link href="/destinations">
              <MenuItem>Destinations</MenuItem>
            </Link>
          )}
        </div>
        <div>
          {path === "/technologies" || (
            <Link href="/technologies">
              <MenuItem>Technologies</MenuItem>
            </Link>
          )}
        </div>
      </Menu>
    </div>
  );
}