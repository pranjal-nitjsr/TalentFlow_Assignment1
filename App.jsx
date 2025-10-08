import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import JobList from "./components/Jobs/JobList";
import CandidateList from "./components/Candidates/CandidateList";
import AssessmentBuilder from "./components/Assessments/AssessmentBuilder";
import { db } from "./utils/storage";
import { jobs } from "./data/jobs";
import { candidates } from "./data/candidates";
import { assessments } from "./data/assessments";

export default function App() {
  useEffect(() => {
    const seedData = async () => {
      const count = await db.jobs.count();
      if (count === 0) {
        await db.jobs.bulkAdd(jobs);
        await db.candidates.bulkAdd(candidates);
        await db.assessments.bulkAdd(assessments);
      }
    };
    seedData();
  }, []);

  return (
    <BrowserRouter>
      <nav style={{display:"flex", gap:"20px", padding:"10px", background:"#222", color:"white"}}>
        <Link to="/jobs" style={{color:"white"}}>Jobs</Link>
        <Link to="/candidates" style={{color:"white"}}>Candidates</Link>
        <Link to="/assessments" style={{color:"white"}}>Assessments</Link>
      </nav>

      <Routes>
        <Route path="/jobs" element={<JobList />} />
        <Route path="/candidates" element={<CandidateList />} />
        <Route path="/assessments" element={<AssessmentBuilder />} />
        <Route path="*" element={<JobList />} />
      </Routes>
    </BrowserRouter>
  );
}
