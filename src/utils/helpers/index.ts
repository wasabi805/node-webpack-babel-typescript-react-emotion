import { iCallApi } from "interfaces";

export const callApi = async ({ method, url, body }: iCallApi) => {
  const options = {
    method,
    url,
    ...(body && { body: JSON.stringify(body) }),
  };

  console.log("what are options", options);

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        return data;
      });

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
