import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import NotificationAddIcon from '@mui/icons-material/NotificationAdd';
import { SvgIcon } from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import React from "react";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import MenuDashboardIcon from "@/assets/icons/menuDashboardIcon";
import MenuTemplateIcon from "@/assets/icons/menuTemplateIcon";
import MenuFilesIcon from '@/assets/icons/menuFilesIcon';
import MenuPackageIcon from '@/assets/icons/menuPackageIcon';
import MenuContactIcon from '@/assets/icons/menuContactIcon';
import MenuHelpIcon from '@/assets/icons/menuHelpIcon';
import MenuSettingIcon from '@/assets/icons/menuSettingIcon';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
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
    title: "my project",
    // path: "my-project",
    icon: (
      <SvgIcon fontSize="small">
        <HomeWorkOutlinedIcon sx={{ color: "#ffffff" }} />
      </SvgIcon>
    ),
    children: [
      {
        external: false,
        disabled: false,
        menu: false,
        title: "project details",
        path: "/my-project/project-details",
      },
      {
        external: false,
        disabled: false,
        menu: false,
        title: "Project products",
        path: "/my-project/project-products",
      },
    ],
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
    title: "File Management",
    path: "/file-management",
    icon: (
      <SvgIcon fontSize="small">
        <MenuFilesIcon />
      </SvgIcon>
    ),
  },
  {
    external: false,
    disabled: false,
    menu: false,
    title: "My work GPT",
    path: "/my-work-gpt",
    icon: (
      <SvgIcon fontSize="small">
        <MenuFilesIcon />
      </SvgIcon>
    ),
  },
  {
    external: false,
    disabled: false,
    menu: false,
    title: "Subscriptions",
    path: "/subscriptions",
    icon: (
      <SvgIcon fontSize="medium">
        <MenuPackageIcon />
      </SvgIcon>
    ),
  },
  {
    external: false,
    disabled: false,
    menu: false,
    title: "Settings",
    path: "/settings",
    icon: (
      <SvgIcon fontSize="medium">
        <MenuSettingIcon />
      </SvgIcon>
    ),
  },
  {
    external: false,
    disabled: false,
    menu: false,
    title: "Call us",
    path: "/call-us",
    icon: (
      <SvgIcon fontSize="medium">
        <MenuContactIcon />
      </SvgIcon>
    ),
  },
  {
    external: false,
    disabled: false,
    menu: false,
    title: "Help",
    path: "/help",
    icon: (
      <SvgIcon fontSize="medium">
        <MenuHelpIcon />
      </SvgIcon>
    ),
  },
];
