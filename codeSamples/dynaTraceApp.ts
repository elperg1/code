import React, { useEffect, useState } from 'react';

const DYNATRACE_URL = 'https://YOUR_ENVIRONMENT.live.dynatrace.com';
const API_TOKEN = 'dt0c01.YOUR_API_TOKEN_HERE'; // ⚠️ Don't hardcode this in production

const METRIC_QUERY = encodeURIComponent('builtin:host.cpu.usage'); // Example metric

const headers = {
  'Authorization': `Api-Token ${API_TOKEN}`,
};

const App = () => {
  const [cpuUsage, setCpuUsage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMetric = async () => {
    setLoading(true);
    setError(null);

    const now = Date.now();
    const from = now - 1000 * 60 * 5; // last 5 minutes

    try {
      const response = await fetch(
        `${DYNATRACE_URL}/api/v2/metrics/query?metricSelector=${METRIC_QUERY}&resolution=1m&from=${from}&to=${now}`,
        { headers }
      );

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`);
      }

      const data = await response.json();
      const value =
        data.result?.[0]?.data?.[0]?.values?.slice(-1)[0] ?? null;

      setCpuUsage(value);
    } catch (err) {
      console.error('Error fetching metric:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Poll every 30 seconds
  useEffect(() => {
    fetchMetric();
    const interval = setInterval(fetchMetric, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial' }}>
      <h1>Dynatrace CPU Usage Monitor</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {cpuUsage !== null && !loading && (
        <h2>Current CPU Usage: {cpuUsage.toFixed(2)}%</h2>
      )}
    </div>
  );
};

export default App;
