import { useEffect, useState } from "react";

export default function useGhibliData() {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    fetch("https://ghibliapi.vercel.app/films")
      .then(res => res.json())
      .then(data => setFilms(data));
  }, []);

  return films;
}
