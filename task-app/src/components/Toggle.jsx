import { useState } from "react";
import StudentCard from "./StudentCard";

function Toggle() {
  const [isvisible, setIsVisible] = useState(false);

  const handleToggle = () => setIsVisible(!isvisible);

  return (
    <div>
      <button onClick={handleToggle}>
        {isvisible ? "Hide Student" : "Show Student"}
      </button>

      {isvisible && (
        <StudentCard
          name="Veenasri"
          age={20}
          email="veena
          @gmail.com"
        />
      )}
    </div>
  );
}

export default Toggle;
