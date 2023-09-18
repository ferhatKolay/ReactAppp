import { toast } from 'react-toastify';

const Toastify = (msg) => {
    toast.info(msg, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export default Toastify