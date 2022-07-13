interface iCallApi {
  method: string;
  url: string;
  body?: {
    users?: any;
    id?: number;
    name?: string;
    firstName?: string;
    lastName?: string;
  };

  params?: {
    id?: string;
  } | null;
}

export const callApi = async ({ method, url, body, params }: iCallApi) => {
  const options = {
    method,
    url,
    ...(body && { body: JSON.stringify(body) }),
    ...(params && { params: JSON.stringify(params) }),
  };

  try {
    const response: Promise<iCallApi> = await fetch(url, {
      ...options,
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());

    return response;
  } catch (error) {
    console.log("there was an error", error);
  }
};
