import axios from "axios";

export const Endpoint = axios.create({
  baseURL: "https://c1-na.altogic.com/e:62f4e38529e2064bb2ac4dc2",
  headers: {
    Authorization:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbnZJZCI6IjYyZjRlMzg1MjllMjA2NGJiMmFjNGRjMiIsImtleUlkIjoiNjJmNGUzODYyOWUyMDY0YmIyYWM0ZGM4IiwiaWF0IjoxNjYwMjE2MTk4LCJleHAiOjI1MjQyMTYxOTh9.ezLd9IN_fZmTn0aI3tydUl0bLAqnMxaCzLjWusOFZaE",
  },
});
