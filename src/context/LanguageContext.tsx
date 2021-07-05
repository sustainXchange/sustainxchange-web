import React, { useEffect, useState } from "react";

const LanguageContext = React.createContext({
  language: "de",
  setLanguage: () => {}
});

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("de");

  useEffect(()=>{}) 

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
