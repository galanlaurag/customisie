import axios from "axios";

const BASE_URL = "http://localhost:5000/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzZGU4NzNmNzE3YjYwMGUwMzY4Njc0NCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3NTc4Njg1MiwiZXhwIjoxNjc2MDQ2MDUyfQ.J8mHiyQcFs_lPDCSlTaKs9EE1Be_jyg0PPjX9_e28VI";

export const publicRequest = axios.create( {
    baseURL: BASE_URL,
})
export const userRequest = axios.create( {
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})