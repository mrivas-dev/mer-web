"use client";

import React from "react";
import { commands } from "@/utils/commands";
import { MacOsTerminal } from "./terminalStyles";


const TerminalMac = () => {

  return (
    <MacOsTerminal
      commands={commands}
    />
  );
};

export default TerminalMac;
