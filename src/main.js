/*import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUmbrella } from "react-icons/fa"; // Umbrella icon

const Main = () => {
  // Store the index of the expanded event (or null if none is expanded)
  const [expanded, setExpanded] = useState(null);

  // Timeline events
  const events = [
    { year: 2000, title: "Company Founded", details: "Our company was founded info info info info info info info info ." },
    { year: 2005, title: "First Major Milestone", details: "We achieved our first major milestone by info info info info info info info info info info info info info info info info." },
    { year: 2010, title: "Milestone 2", details: "info info info info info info info info info info info info info info info info." },
    { year: 2015, title: "Milestone 3", details: "info info info info info info info info info info info info info info info info." },
    { year: 2020, title: "Milestone 4", details: "info info info info info info info info info info info info info info info info." },
    { year: 2025, title: "Milestone 5", details: "info info info info info info info info info info info info info info info info info info info info info info info info." }
  ];

  return (
    <div>
      <h1>Timeline</h1>
      <VerticalTimeline>
        {events.map((event, index) => (
          <VerticalTimelineElement
            key={index}
            date={event.year}
            iconStyle={{ background: "#2196F3", color: "#fff" }}
            icon={<FaUmbrella />}
            contentStyle={{ padding: "10px 20px", textAlign: "left" }} // Adjust padding
            dateClassName="timeline-date" // Custom class for styling
          >
           ************************************ Clickable title to toggle expansion 
            <h3
              onClick={() => setExpanded(expanded === index ? null : index)}
              style={{ cursor: "pointer", color: "#007BFF", textDecoration: "underline" }} // Visual cue
            >
              {event.title}
            </h3>

           ********************************Show details only if this event is expanded 
            {expanded === index && <p>{event.details}</p>}
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default App;

*/

// main.js (Updated with WebAR Support)
import React, { useState } from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUmbrella } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { ARButton, XR } from "@react-three/xr";
import { Plane } from "@react-three/drei";

const Main = () => {
  const [expanded, setExpanded] = useState(null);
  const [showAR, setShowAR] = useState(false);

  const events = [
    { year: 2000, title: "Company Founded", details: "Company foundation details." },
    { year: 2005, title: "First Major Milestone", details: "Details of milestone 1." },
    { year: 2010, title: "Milestone 2", details: "Details of milestone 2." },
    { year: 2015, title: "Milestone 3", details: "Details of milestone 3." },
    { year: 2020, title: "Milestone 4", details: "Details of milestone 4." },
    { year: 2025, title: "Milestone 5", details: "Details of milestone 5." }
  ];

  return (
    <div>
      <h1>Timeline</h1>
      <button onClick={() => setShowAR(!showAR)}>
        {showAR ? "Exit AR Mode" : "Enter AR Mode"}
      </button>
      
      {!showAR ? (
        <VerticalTimeline>
          {events.map((event, index) => (
            <VerticalTimelineElement
              key={index}
              date={event.year}
              iconStyle={{ background: "#2196F3", color: "#fff" }}
              icon={<FaUmbrella />}
              contentStyle={{ padding: "10px 20px", textAlign: "left" }}
            >
              <h3 onClick={() => setExpanded(expanded === index ? null : index)}
                  style={{ cursor: "pointer", color: "#007BFF", textDecoration: "underline" }}>
                {event.title}
              </h3>
              {expanded === index && <p>{event.details}</p>}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      ) : (
        <>
          <ARButton />
          <Canvas>
            <XR>
              <ambientLight />
              <directionalLight position={[0, 1, 1]} />
              <Plane args={[3, 4]} position={[0, 1, -3]}>
                <meshStandardMaterial attach="material" color="lightblue" />
              </Plane>
            </XR>
          </Canvas>
        </>
      )}
    </div>
  );
};

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default App;