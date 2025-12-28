import { useEffect } from "react";
import { baseUrl } from "./constants/constants";

const App = () => {
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const res = await fetch(`${baseUrl}/api/health`);
        console.log(res.ok);
      } catch (error) {
        console.log(error.message);
      }
    };

    checkHealth();
  }, []);
  return (
    <div>
      <h1 className="heading">Hello World!</h1>
    </div>
  );
};

export default App;
