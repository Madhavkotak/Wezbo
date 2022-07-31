import "./App.css";
import React, { useState } from "react";

import NavBar from "./components/NavBar";
import Blog from "./components/Blog";
import Department from "./components/Department";
import Footer from "./components/Footer";
import About from "./components/About";
import Choice from "./components/Choice";

function App() {
  const [choice, setChoice] = useState([]);
  return (
    <div className="App">
      <div className="nvb">
        <NavBar />
      </div>
      <h3
        style={{
          margin: "30px",
        }}
      >
        DEPARTMENTS
      </h3>
      <div className="deptm">
        <Department
          deptName="Technology"
          imageLink="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          desc="Institute of Technology"
        />
        <Department
          deptName="Law"
          imageLink="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg
          "
          desc="Institute of Law"
        />
        <Department
          deptName="PHARMACY"
          imageLink="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=600"
          desc="Institute of Pharmacy"
        />
        <Department
          deptName="MANAGEMENT"
          imageLink="https://images.pexels.com/photos/8297030/pexels-photo-8297030.jpeg?auto=compress&cs=tinysrgb&w=600"
          desc="Institute of Management"
        />
        <Department
          deptName="ARCHITECTURE"
          imageLink="https://images.pexels.com/photos/4322027/pexels-photo-4322027.jpeg?auto=compress&cs=tinysrgb&w=600"
          desc="Institute of Architecture"
        />
      </div>
      <h3
        style={{
          margin: "30px",
        }}
      >
        MARK THE SUBJECTS YOU LIKE
      </h3>
      <Choice setchoice={setChoice} />
      <h3
        style={{
          margin: "30px",
        }}
      >
        SOME USEFUL BLOGS
      </h3>
      <div className="Blg">
        <Blog
          blogPic="https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="Research In Our Institute"
          desc="Dr Anushka Shrivastava is a certified cytogenetics technologist by the NABL (National Accreditation Board for Laboratory) and PNDT (Pre-Natal Diagnostic Act) based in New Delhi. Dr Shrivastava was interested in researching the genetic causes of abortions for better clinical management."
          i1="Video Summarisation: To generate a summary of the content of a longer video"
          i2="Improving Multi-Machine Power System Stability having High Penetration of Wind Energy Resources"
          i3="Improving Multi-Machine Power System Stability having High Penetration of Wind Energy Resources"
          link="Nirma University"
          link2=""
        />
        <Blog
          blogPic="https://images.pexels.com/photos/6964899/pexels-photo-6964899.jpeg?auto=compress&cs=tinysrgb&w=600"
          title="A trip to Bhrigu Lake"
          desc="Intrigued by the beauty of nature, peace in the valleys, breathtaking views of the night sky, passionate display of colours during the sunset and the thrill of sleeping in tents outside, a Himalayan trek was something we always had on our bucket list."
          i1="We made a brief visit to the local markets on Mall Road, believed to be the heart and soul of Manali."
          i2="Before starting our journey back to Una, on the last night in Manali, the instructors surprised us with a party where we danced and had sumptuous food."
          i3="The nine days of this trip gave us insights into life that we could not experience living in the comforts of our homes. We made new friends, learned about different cultures, the way of living and how rich our Indian culture is."
          link="Author Chesta Jindal and Vanshita Bachani"
          link2=""
        />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
