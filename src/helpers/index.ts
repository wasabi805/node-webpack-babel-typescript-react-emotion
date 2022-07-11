interface iCallApi {
  method: string;
  url: string;
  body?: string | null;

  params?: {} | null;
}

export const callApi = async ({ method, url, body, params }: iCallApi) => {
  try {
    const options = Object.entries({ method, body, params }).reduce(
      (acc, [key, val]) => {
        return val ? { ...acc, [key]: val } : acc;
      },
      {}
    );

    const response: Promise<iCallApi> = await fetch(url, {
      ...options,
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    console.log("what is response", response);
    return response;
  } catch (error) {}
};
