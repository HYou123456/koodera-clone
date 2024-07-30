import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { ButtonScrollTop, Footer, Header } from "./Components";
import { Home, About, Projects, ServicesPage, ContactUs } from "./Pages";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import AOS from "aos";

import "aos/dist/aos.css";
import { useState } from "react";

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const querySnapshot = await getDocs(collection(db, "projects"));
      const arr = [];
      querySnapshot.forEach((doc) => {
        arr.push(doc.data());
      });
      setProjects(arr);
    };
    getData();
    return () => {};
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    return () => {};
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              projects={projects?.length > 6 ? projects.slice(0, 7) : projects}
            />
          }
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
      <ButtonScrollTop />
    </div>
  );
};

export default App;
