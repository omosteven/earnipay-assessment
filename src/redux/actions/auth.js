import { toast } from "react-toastify";

import { fetchApi } from "../../util/fetchApi";

export const authHandler = async (params, setLoading) => {
  setLoading(true);
  const APIUrl = 'https://fundingseriesapis.herokuapp.com/api/v1/auth/login/';

  let requestHeaders = {
    "Content-Type": "application/json",
  };

  const getResponse = async () => {
    const { isError, errorMessage } = await fetchApi(
      params,
      "POST",
      APIUrl,
      requestHeaders
    );

    if (isError) {
      setLoading(false);
      console.log('err',errorMessage)

      return toast.error(errorMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setLoading(false);
      return toast.success("Successfully logged in!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const response = await getResponse();
  return response;
};
