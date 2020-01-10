type TMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH";

export const fetchJson = async (url: string, method: TMethod) => {
  const response = await fetch(url, { method });
  return await response.json();
};
