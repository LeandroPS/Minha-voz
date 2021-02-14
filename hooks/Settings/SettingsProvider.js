import React, { useState, createContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialValue = {
  speed: 1,
};

const SettingsContext = createContext();

const SettingsProvider = ({ children }) => {
  const [settings, setSettings] = useState(initialValue);

  useEffect(() => {
    const getSettings = async () => {
      const persistedSettings = await AsyncStorage.getItem("settings");
      if (persistedSettings) {
        const parsedSettings = JSON.parse(persistedSettings);
        setSettings(parsedSettings);
      }
    };
    getSettings();
  }, []);

  useEffect(() => {
    const saveSettings = async () => {
      const stringfiedSettings = JSON.stringify(settings);
      await AsyncStorage.setItem("settings", stringfiedSettings);
    };

    saveSettings();
  }, [settings]);

  return (
    <SettingsContext.Provider
      value={{
        settings,
        setSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsProvider;
export { SettingsContext };
