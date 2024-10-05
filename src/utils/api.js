import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNjdjNWVhNTMwYTIxZmRkODFlNDg4NGE0YzYzOGYxNyIsIm5iZiI6MTcyNjI4NzMzMC45ODMxMDMsInN1YiI6IjY2ZDVmNGI2MzRiNGM0NDRhM2MxMWM1NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7K_ov69S1T8NgwSz-jfAnmlit3Rsd1onMl3Ri27ZX30",
  },
});

export default api;
