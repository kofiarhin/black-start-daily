import { useEffect } from "react";
import { baseUrl } from "./constants/constants";

const App = () => {
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/news`);
        if (!res.ok) {
          throw new Error("somethign went wrong");
        }
        const data = await res.json();

        console.log({ data });
      } catch (error) {
        console.log(error.message);
      }
    };

    checkHealth();
  }, []);
  return (
    <div>
      <h1 className="heading center">Black star Daily</h1>
    </div>
  );
};

export default App;
