import React from "react";
import { Button, useMediaQuery, useTheme } from "@mui/material";
import type { ButtonProps } from "@mui/material";
import { NavLink } from "react-router-dom";
import type { NavLinkProps } from "react-router-dom";

type NavButtonProps = Omit<ButtonProps<typeof NavLink>, "component"> & {
  label: string;
  icon?: React.ReactElement;
} & Pick<NavLinkProps, "to" | "end">;

const NavButton: React.FC<NavButtonProps> = ({ label, icon, to, end, ...props }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <Button
      {...props}
      component={NavLink as React.ElementType}
      to={to}
      end={end}
      sx={{
        "&.active": {
          borderBottom: "2px solid white",
        },
        minWidth: isMobile ? 'auto' : undefined,
        borderRadius: 0,
        ...props.sx,
      }}
    >
      {isMobile && icon ? icon : label}
    </Button>
  );
};

export default NavButton;
