import { createContext } from "react";
import useSweetAlert from "../../Pages/Hooks/useSweetAlert";


export const SweetAlertContext = createContext(null);

const SweetAlertProvider = ({ children }) => {
  const allContext = useSweetAlert();

  return (
    <SweetAlertContext.Provider value={allContext}>{children}</SweetAlertContext.Provider>
  );
};

export default SweetAlertProvider;