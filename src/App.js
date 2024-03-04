
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import AllRoutes from "./routes/allRoutes";
import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"; // this is for bootstrap
import "bootstrap/dist/js/bootstrap.min.js";
import "react-toastify/dist/ReactToastify.css"; // this is for toastify


function App() {
  useEffect(() => {
    toast.success("welcome to the website");
  }, []);
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <AllRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
