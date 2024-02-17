"use client";

import NavLink from "@/components/NavLink";
import style from "./style.module.scss";
import Logo from "@/assets/img/logo.svg";
import SearchInput from "@/components/SearchInput";

import { useState } from "react";
import PrimaryList from "./PrimaryList";
import PrimaryControls from "./PrimaryControls";

function PrimaryHeader() {
  return (
    <div className={style.primaryHeader}>
      <div className={`container ${style.contentWrapper}`}>
        <Logo />
        <PrimaryList />
        <PrimaryControls />
      </div>
    </div>
  );
}

export default PrimaryHeader;
