import Modal from "react-modal";
import { useForm } from "react-hook-form";
import { useState } from "react/cjs/react.development";
import { authHandler } from "../../redux/actions/auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "white",
    border: "none",
    display:'none',
    boxShadow: "19px 19px 34px #afafaf, -19px -19px 34px #ffffff",
  },
};

const FormModal = ({ handleClose, open }) => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    authHandler(data, setLoading);
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
        zIndex={10000000000000000000000}
      />
<div style={{display:'none'}}>
      <Modal
        isOpen={open}
        // onAfterOpen={afterOpenModal}
        onRequestClose={handleClose}
        style={customStyles}
      >
        <div className="modal">
          <div className="modal-close">
            <button onClick={handleClose}>X</button>
          </div>

          <div className="mt-2">
            <h1 className="mt-4 text-green-700 font-bold text-medium">
              SIGN/LOG INTO YOUR ACCOUNT
            </h1>

            <form className="mt-4 mb-8" onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="email"
                  disabled={loading}
                  placeholder="Email"
                  {...register("email", { required: true, minLength: 4 })}
                />
                {errors?.email && (
                  <span className="form-error">
                    Email must be contain atleast 4 characters.
                  </span>
                )}
              </div>
              <div className="mb-4">
                <input
                  className="shadow appearance-none border rounded w-full py-3.5 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  disabled={loading}
                  placeholder="Password"
                  {...register("password", { required: true, minLength: 8 })}
                />
                {errors?.password && (
                  <span className="form-error">
                    Password must contain atleast 8 characters.
                  </span>
                )}
              </div>
              <button
                type="submit"
                disabled={loading}
                className="full-width bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  mt-2"
                style={{ background: loading && "lightgray" }}
              >
                {loading ? "Please wait..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </Modal>
      </div>
    </>
  );
};

export default FormModal;
