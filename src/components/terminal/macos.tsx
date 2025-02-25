"use client";

import React, { useEffect, useState } from "react";
import { ReactTerminal } from "react-terminal";
import { commands } from "../../utils/commands";
import TerminalToolbar from "./topBar";
import "./mac.css";


const TerminalMac = () => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const getIP = () => {
    fetch("https://ipinfo.io/json")
      .then(response => response.json())
      .then(data => {
        setIpAddress(data.ip);
      })
      .catch(error => {
        console.error("Error fetching IP address:", error);
        setIpAddress("user@macos")
      });
  }

  useEffect(() => {
    getIP();
  }, []);

  return (
    <>
      <TerminalToolbar />
      <ReactTerminal
        welcomeMessage={`Last login: Tue Feb 25 10:20:29 on ttys001`}
        prompt={`\n${ipAddress} ~ % `}
        showControlBar={false}
        commands={commands}
      />
    </>
  );
};

export default TerminalMac;
