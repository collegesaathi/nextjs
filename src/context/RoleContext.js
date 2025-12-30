import React, { createContext, useContext, useState } from 'react';
import toast from 'react-hot-toast';

const RoleContext = createContext();

export const RoleProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [language, setLanguage] = useState("ja"); 

  // --- NEW COMPARE STATE ---
  const [selectedUnis, setSelectedUnis] = useState([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);


    const toggleUniversity = (uni) => {
    // Handling different ID formats (from your API or card props)
    const uniId = uni?.id ;
    const isAlreadySelected = selectedUnis.find((item) => item.id === uniId);

    if (isAlreadySelected) {
      setSelectedUnis(selectedUnis.filter((item) => item.id !== uniId));
    } else {
      if (selectedUnis.length < 3) {
        // Standardize keys for your Compare UI
        const newUni = {
          id: uniId,
          name: uni?.name ,
          icon: uni?.icon ,
          icon_alt: uni?.name ,
          slug: uni?.slug,
        };
        setSelectedUnis([...selectedUnis, newUni]);
        setIsCompareOpen(true); // Open the popup immediately
      } else {
        toast.error("Maximum 3 universities allowed");
      }
    }
  };


  return (
    <RoleContext.Provider value={{ user, setUser, language, setLanguage, selectedUnis, setSelectedUnis,  isCompareOpen, setIsCompareOpen, toggleUniversity }}>
      {children}
    </RoleContext.Provider>
  );
};

// Custom hook for easier access
export const useRole = () => useContext(RoleContext);