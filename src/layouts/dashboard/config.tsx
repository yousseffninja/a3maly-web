import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { SvgIcon } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import React from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MenuDashboardIcon from "@/assets/icons/menuDashboardIcon";
import MenuTemplateIcon from "@/assets/icons/menuTemplateIcon";
import MenuFilesIcon from '@/assets/icons/menuFilesIcon';
export const items = [
  {
    external: false,
    disabled: false,
    menu: false,
    title: "Dashboard",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <MenuDashboardIcon />
      </SvgIcon>
    ),
  },
  {
    external: false,
    disabled: false,
    menu: false,
    title: "Templates",
    path: "/Templates",
    icon: (
      <SvgIcon fontSize="small">
        <MenuTemplateIcon />
      </SvgIcon>
    ),
  },
  {
    external: false,
    disabled: false,
    menu: false,
    title: "Documents",
    icon: (
      <SvgIcon fontSize="small">
        <MenuFilesIcon />
      </SvgIcon>
    ),
    children: [
      {
        external: false,
        disabled: false,
        menu: false,
        title: "All-Documents",
        path: "/Documents/All-Documents",
        icon: (
          <SvgIcon fontSize="small">
            <KeyboardDoubleArrowRightIcon />
          </SvgIcon>
        ),
      },
      {
        external: false,
        disabled: false,
        menu: false,
        title: "All Image",
        path: "/Documents/All-Image",
        icon: (
          <SvgIcon fontSize="small">
            <KeyboardDoubleArrowRightIcon />
          </SvgIcon>
        ),
      },
      {
        external: false,
        disabled: false,
        menu: false,
        title: "Workbooks",
        path: "/Documents/Workbooks",
        icon: (
          <SvgIcon fontSize="small">
            <KeyboardDoubleArrowRightIcon />
          </SvgIcon>
        ),
      },
    ],
  },
  {
    external: false,
    disabled: false,
    menu: false,
    title: "AI Image",
    path: "/AI-Image",
    icon: (
      <SvgIcon fontSize="medium">
        <LocalShippingIcon />
      </SvgIcon>
    ),
  },
];
