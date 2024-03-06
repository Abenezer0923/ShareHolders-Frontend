import React from "react";

import { Icon } from "@chakra-ui/react";
import {
  MdBarChart,
  MdPerson,
  MdShare,
  MdHome,
  MdLock,
  MdKey,
  MdOutlineShoppingCart,
} from "react-icons/md";

// Shareholder Imports
import MainDashboard from "views/Shareholder/default";
import NFTMarketplace from "views/Shareholder/marketplace";
import Profile from "views/Shareholder/profile";
import DataTables from "views/Shareholder/dataTables";

import Franchise from "views/Shareholder/Franchise";
import Ordinary from "views/Shareholder/Ordinary";
import Tsm from "views/Shareholder/Tsm";
import Certeficate from "views/Shareholder/Certeficate";
import Templete from "views/Shareholder/Templete";
// Auth Imports
import SignInCentered from "views/auth/signIn";
import Otp from "views/auth/otp"

const routes = [
  {
    name: "Dashboard",
    layout: "/Shareholder",
    path: "/default",
    icon: <Icon as={MdHome} width="20px" height="20px" color="inherit" />,
    component: MainDashboard,
  },
  // {
  //   name: "Transactions",
  //   layout: "/Shareholder",
  //   path: "/nft-marketplace",
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width='20px'
  //       height='20px'
  //       color='inherit'
  //     />
  //   ),
  //   component: NFTMarketplace,
  //   secondary: true,
  // },
  {
    name: "Transactions",
    layout: "/Shareholder",
    path: "/data-tables",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: DataTables,
    secondary: true,
  },
  {
    name: "What's New",
    layout: "/Shareholder",
    path: "/what-is-new",
    icon: <Icon as={MdBarChart} width="20px" height="20px" color="inherit" />,
    component: NFTMarketplace,
    
  },
  {
    name: "Franchise",
    layout: "/Shareholder",
    path: "/franchise",
    icon: <Icon as={MdKey} width="20px" height="20px" color="inherit" />,
    component: Franchise,
  },
  // {
  //   name: "Ordinary",
  //   layout: "/Shareholder",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  {
    name: "Ordinary",
    layout: "/Shareholder",
    path: "/ordinary",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Ordinary,
  },
  // {
  //   name: "Example",
  //   layout: "/Shareholder",
  //   path: "/profile",
  //   icon: <Icon as={MdPerson} width='20px' height='20px' color='inherit' />,
  //   component: Profile,
  // },
  {
    name: "TSM",
    layout: "/Shareholder",
    path: "/tsm",
    icon: <Icon as={MdShare} width="20px" height="20px" color="inherit" />,
    component: Tsm,
  },
  // {
  //   name: "whattt",
  //   layout: "/Shareholder",
  //   path: "/nft-marketplace",
  //   icon: (
  //     <Icon
  //       as={MdOutlineShoppingCart}
  //       width='20px'
  //       height='20px'
  //       color='inherit'
  //     />
  //   ),
  //   component: NFTMarketplace,
  //   secondary: true,
  // },
  {
    name: "Certificate",
    layout: "/Shareholder",
    path: "/certeficate",
    icon: (
      <Icon
        as={MdOutlineShoppingCart}
        width="20px"
        height="20px"
        color="inherit"
      />
    ),
    component: Certeficate,
    secondary: true,
  },
  {
    name: "Settings",
    layout: "/Shareholder",
    path: "/profile",
    icon: <Icon as={MdPerson} width="20px" height="20px" color="inherit" />,
    component: Profile,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "/sign-in",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: SignInCentered,
  },
  {
    name: "Otp",
    layout: "/auth",
    path: "/otp",
    icon: <Icon as={MdLock} width='20px' height='20px' color='inherit' />,
    component: Otp,
  },

  // {
  //   name: "RTL Shareholder",
  //   layout: "/rtl",
  //   path: "/rtl-default",
  //   icon: <Icon as={MdHome} width='20px' height='20px' color='inherit' />,
  //   component: RTL,
  // },
  {
    layout: "/Shareholder",
    path: "/templete",
    component: Templete,
    hidden: true,
  },

];

export default routes;
