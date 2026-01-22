// FormContext.js
import React, { createContext, useState, useContext } from "react";

const FormContext = createContext();

export const useFormContext = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const openForm = () => setIsFormOpen(true);
    const closeForm = () => setIsFormOpen(false);

    return (
        <FormContext.Provider value={{ isFormOpen, openForm, closeForm }}>
            {children}
        </FormContext.Provider>
    );
};
