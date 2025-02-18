"use client";

import { getLanguage } from "@/utils/translations";
import Link from "next/link";
import { useEffect, useState } from "react";

/*
Booting up

DONE

Detecting OS

OS Detected MacOS

Detecting Language

Language Detected Spanish
*/

export default function Home() {
  const [loadingState, setLoadingState] = useState<number>(0);
  const [booted, setBooted] = useState<boolean>(false);
  const [os, setOS] = useState<string | null>(null);
  const [language, setLanguage] = useState<string | null>(null);
  const [redirect, setRedirect] = useState<boolean>(false);

  const upLoading = () => {
    setLoadingState((curr) => {
      return curr + Math.floor(Math.random() * 25);
    });
  };

  const isMacintosh = () => {
    return navigator.platform.indexOf("Mac") > -1;
  };

  const isWindows = () => {
    return navigator.platform.indexOf("Win") > -1;
  };

  const isLinux = () => {
    return navigator.platform.indexOf("Lin") > -1;
  };

  const bootUp = () => {
    setTimeout(() => {
      upLoading();
      setBooted(true);
    }, 500);
  };

  const detectSO = () => {
    setTimeout(() => {
      upLoading();
      if (isLinux()) {
        setOS("Linux");
      }
      if (isWindows()) {
        setOS("Windows");
      }
      if (isMacintosh()) {
        setOS("MacOS");
      }
    }, 3000);
  };

  const detectLanguage = () => {
    setTimeout(() => {
      upLoading();
      const lang = getLanguage();
      setLanguage(lang);
    }, 3000);
  };

  const detectRedirection = () => {
    setTimeout(() => {
      upLoading();
      if (isLinux()) {
        setRedirect(true);
      }
      if (isWindows()) {
        setRedirect(true);
      }
      if (isMacintosh()) {
        setRedirect(true);
      }
    }, 3000);
  };

  const triggerRedirect = () => {
    setTimeout(() => {
      setLoadingState(100);
      if (isLinux()) {
        window.location.replace("/linux");
      }
      if (isWindows()) {
        window.location.replace("/windows");
      }
      if (isMacintosh()) {
        window.location.replace("/mac");
      }
    }, 5000);
  };
  useEffect(() => {
    bootUp();
    detectSO();
    detectLanguage();
    detectRedirection();
    triggerRedirect();
  }, []);

  return (<>
    <div className="w-full bg-gray-200 rounded-full h-0.5 dark:bg-gray-700 ">
      <div className="bg-green-600 h-0.5 rounded-full animate-scroll " style={{ width: `${loadingState}%` }}></div>
    </div>
    <main className="flex flex-col gap-8 row-start-2 items-start sm:items-start terminal">
      <p>{"Booting up"} {booted && "DONE ✅"}</p>
      <p>{"Detecting OS"} {os && `${os} ✅`}</p>
      <p>{"Detecting Language"} {language && `${language === "es" ? "Spanish" : "English"} ✅`}</p>
      <p>{redirect && "Redirecting"}</p>
    </main>

  </>
  );
}
