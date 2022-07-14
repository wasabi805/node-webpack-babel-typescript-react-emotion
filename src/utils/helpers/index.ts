import { iCallApi } from "../../interfaces";

export const callApi = async ({ method, url, body, params }: iCallApi) => {
  const options = {
    method,
    url,
    ...(body && { body: JSON.stringify(body) }),
    ...(params && { params: JSON.stringify(params) }),
  };

  try {
    const response = await fetch(url, {
      ...options,
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    return response;
  } catch (error) {
    console.log("there was an error", error);
  }
};
