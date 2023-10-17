import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Mjc1NTUxMmZkMzNlNDI2MGVkZmQ0OCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY5NzU2Nzk1NiwiZXhwIjoxNjk3ODI3MTU2fQ.d7R8bWCIYJaNaTErpymjmNNLkKd0m6PpmVxUKlE_U-Y";

export const publicRequest = axios.create({
    baseURL : BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});