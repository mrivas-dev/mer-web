


"use client";

import React from "react";
import { TOOLBAR } from "./terminalStyles";


const TerminalToolbar = () => {

    return (
        <TOOLBAR>
            <svg height="20" width="100">
                <circle cx="24" cy="14" r="5" fill="red" style={{ cursor: 'pointer' }}>
                </circle>
                <circle cx="44" cy="14" r="5" fill="orange" style={{ cursor: 'pointer' }}>
                </circle>
                <circle cx="64" cy="14" r="5" fill="green" style={{ cursor: 'pointer' }}>
                </circle>
            </svg>
        </TOOLBAR>
    );
};

export default TerminalToolbar;
