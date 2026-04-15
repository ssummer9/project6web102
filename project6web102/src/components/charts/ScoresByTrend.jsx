import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function ScoreByTrend({ films }) {
  const chartData = films
    .map(f => ({
      year: Number(f.release_date),
      score: Number(f.rt_score)
    }))
    .sort((a, b) => a.year - b.year);

  return (
    <div className="chart-box">
      <h3>Rotten Tomatoes Score Over Time</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={chartData}>
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="score" stroke="#ff8fab" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
