import { translate } from "./translations";


let exitAttemps = 0;

const basic = () => translate("BASIC_INFO");
const back = () => window.location.replace(`/`);
const macos = () => window.location.replace(`/macos`);
const windows = () => window.location.replace(`/windows`);
const linux = () => window.location.replace(`/linux`);
const jobs = () => translate("JOBS");
const techStack = () => translate("TECH_STACK");
const history = () => translate("HISTORY");

const resume = () => {
  // window.open(RESUME, "_blank");
  return "";
};
const ls = () => translate("LS");
const cd = () => translate("CD");
const rm = () => translate("RM");
const cp = () => translate("CP");
const tail = () => translate("TAIL");
const cat = () => translate("CAT");
const mv = () => translate("MV");
const top = () => translate("TOP");
const exit = () => {
  let message = "";
  if (exitAttemps > 2) {
    window.close();
  } else {
    message = translate(`EXIT_ATTEMPT_${exitAttemps}`);
    exitAttemps++;
  }
  return message;
};

export const commands = {
  basic: basic,
  jobs: jobs,
  history: history,
  techStack: techStack,
  resume: resume,
  back: back,
  macos: macos,
  windows: windows,
  linux: linux,
  ls: ls,
  cd: cd,
  rm: rm,
  cp: cp,
  tail: tail,
  cat: cat,
  mv: mv,
  top: top,
  exit: exit,
};
