import { useContext } from "react";
import { SettingsContext } from "./SettingsProvider";

const useSettings = () => useContext(SettingsContext);

export { useSettings };
