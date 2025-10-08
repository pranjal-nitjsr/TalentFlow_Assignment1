import React, { useEffect, useState } from "react";
import { db } from "../../utils/storage";

export default function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    db.jobs.toArray().then(setJobs);
  }, []);

  return (
    <div style={{padding:"20px"}}>
      <h2>Jobs Board</h2>
      {jobs.map(job => (
        <div key={job.id} style={{border:"1px solid gray", margin:"10px", padding:"10px", borderRadius:"6px"}}>
          <h3>{job.title}</h3>
          <p>Status: {job.status}</p>
          <p>Tags: {job.tags.join(", ")}</p>
        </div>
      ))}
    </div>
  );
}
