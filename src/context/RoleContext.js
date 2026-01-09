"use client";

import React, { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const RoleContext = createContext({
  user: null,
  setUser: () => { },
  language: "ja",
  setLanguage: () => { },
  selectedUnis: [],
  setSelectedUnis: () => { },
  isCompareOpen: false,
  setIsCompareOpen: () => { },
  toggleUniversity: () => { },
});

export const RoleProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [course, setCourse] = useState([]);

  const [language, setLanguage] = useState("ja");

  const [selectedUnis, setSelectedUnis] = useState([]);
  const [selectedCourses, setSelectedCourse] = useState([]);

  const [isCompareOpen, setIsCompareOpen] = useState(false);

  const toggleUniversity = (uni) => {
    const uniId = uni?.id;
    if (!uniId) return;

    const isAlreadySelected = selectedUnis.find((item) => item.id === uniId);

    if (isAlreadySelected) {
      setSelectedUnis(selectedUnis.filter((item) => item.id !== uniId));
      return;
    }
    if (selectedUnis.length >= 3) {
      toast.error("Maximum 3 universities allowed");
      return;
    }
    const newUni = {
      id: uniId,
      name: uni?.name || "",
      icon: uni?.icon || "",
      icon_alt: uni?.name || "",
      slug: uni?.slug || "",
    };
    setSelectedUnis([...selectedUnis, newUni]);
    setIsCompareOpen(true);
  };

  console.log("selectedCourses" ,selectedCourses)
  const toggleCourse = (uni) => {
    console.log("uni"  ,uni)
    const uniId = uni?.id;
    console.log("uniId" ,uniId)
    if (!uniId) return;
    // safety check
    if (!Array.isArray(course)) {
      console.error("course is not an array", course);
      return;
    }

    const isAlreadySelected = course.find(
      (item) => item.id === uniId
    );
console.log("isAlreadySelected" ,isAlreadySelected)
    if (isAlreadySelected) {
      setSelectedCourse(course.filter((item) => item.id === uniId));
      return;
    }

    if (course.length >= 3) {
      toast.error("Maximum 3 universities allowed");
      return;
    }
   

    const newUni = {
      id: uniId,
      name: uni?.name || "",
      icon: uni?.icon || "",
      icon_alt: uni?.name || "",
      slug: uni?.slug || "",
    };

    setSelectedCourse([...course, newUni]);
    setIsCompareOpen(true);
  };

  return (
    <RoleContext.Provider
      value={{
        user,
        setUser,
        language,
        setLanguage,
        selectedUnis,
        setSelectedUnis,
        isCompareOpen,
        setIsCompareOpen,
        toggleUniversity,
        course,
         setCourse,
        selectedCourses,
        toggleCourse
      }}
    >
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => useContext(RoleContext);
