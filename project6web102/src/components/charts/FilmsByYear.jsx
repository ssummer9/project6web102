import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function FilmsByYear({ films }) {
  const data = films.reduce((acc, film) => {
    const year = film.release_date;
    acc[year] = (acc[year] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(data).map(([year, count]) => ({
    year,
    count
  }));

  return (
    <div className="chart-box">
      <h3>Films by Release Year</h3>
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={chartData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#7fb77e" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
