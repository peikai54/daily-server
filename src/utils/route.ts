export const getPath = (path: string) => `/api${path}`;

export const wrapSuccess = (data?: any, message?: string) => ({
  code: 0,
  data: data || {},
  message: message || "",
});
