// Provides helper function to format headers for authenticated requests.

import { AxiosRequestHeaders, RawAxiosRequestHeaders } from "axios";

export default function authHeader(): RawAxiosRequestHeaders {
  const localstorageUser = localStorage.getItem("user");
  if (!localstorageUser) {
    return {};
  }
  const user = JSON.parse(localstorageUser);
  if (user && user.token) {
    return { Authorization: `Token ${user.token}` };
  }
  return {};
}
