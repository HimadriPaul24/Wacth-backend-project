import { useContext } from "react";
import { SweetAlertContext } from "../../Context/SweetAlertProvider/SweetAlertProvider";


const useAlert = () => {
    const alert = useContext(SweetAlertContext);
    return alert;
}

export default useAlert;

