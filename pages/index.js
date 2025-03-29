import { useState } from "react";

export default function Home() {
  const [response, setResponse] = useState("");

  const callApi = async () => {
    const res = await fetch("/api/hello");
    const data = await res.json();
    setResponse(data.message);
  };

  return (
    <div>
      <h1>Welcome to Vercel Deployment</h1>
      <button onClick={callApi}>Call API</button>
      <p>{response}</p>
    </div>
  );
}
