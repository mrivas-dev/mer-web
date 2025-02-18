// /* eslint-disable react-hooks/exhaustive-deps */
// import React from "react";
// import "../styles/home.css";

// const Home = () => {
//   const [booted, setBooted] = React.useState(false);
//   const [os, setOS] = React.useState(null);
//   const [language, setLanguage] = React.useState(null);
//   const [redirect, setRedirect] = React.useState(null);

//   const isMacintosh = () => {
//     return navigator.platform.indexOf("Mac") > -1;
//   };

//   const isWindows = () => {
//     return navigator.platform.indexOf("Win") > -1;
//   };

//   const isLinux = () => {
//     return navigator.platform.indexOf("Lin") > -1;
//   };

//   const bootUp = () => {
//     setTimeout(() => {
//       setBooted(true);
//     }, 1000);
//   };

//   const detectSO = () => {
//     setTimeout(() => {
//       if (isLinux()) {
//         setOS("Linux");
//       }
//       if (isWindows()) {
//         setOS("Windows");
//       }
//       if (isMacintosh()) {
//         setOS("MacOS");
//       }
//     }, 2000);
//   };

//   const detectLanguage = () => {
//     setTimeout(() => {
//       const lang = getLanguage();
//       setLanguage(lang);
//     }, 3000);
//   };

//   const detectRedirection = () => {
//     setTimeout(() => {
//       if (isLinux()) {
//         setRedirect(true);
//       }
//       if (isWindows()) {
//         setRedirect(true);
//       }
//       if (isMacintosh()) {
//         setRedirect(true);
//       }
//     }, 4000);
//   };

//   const triggerRedirect = () => {
//     setTimeout(() => {
//       if (isLinux()) {
//         window.location.replace("/linux");
//       }
//       if (isWindows()) {
//         window.location.replace("/windows");
//       }
//       if (isMacintosh()) {
//         window.location.replace("/macos");
//       }
//     }, 5000);
//   };

//   React.useEffect(() => {
//     bootUp();
//     detectSO();
//     detectLanguage();
//     detectRedirection();
//     triggerRedirect();
//   }, []);

//   return (
//     <div className="main-wrapper">
//       <div id="loader">
//         <div id="loaded"></div>
//       </div>
//       <div className="terminal">
//         <p>{"Booting up"}</p>
//         <p>{booted && "DONE"}</p>
//         <p>{"Detecting OS"}</p>
//         <p>{os && `OS Detected ${os}`}</p>
//         <p>{"Detecting Language"}</p>
//         <p>
//           {language &&
//             `Language Detected ${language === "es" ? "Spanish" : "English"}`}
//         </p>
//         <p>{redirect && "Redirecting"}</p>
//       </div>
//     </div>
//   );
// };

// export default Home;
