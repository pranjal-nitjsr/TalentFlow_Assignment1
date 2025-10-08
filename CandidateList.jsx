import React, { useEffect, useState } from "react";
import { db } from "../../utils/storage";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    db.candidates.toArray().then(setCandidates);
  }, []);

  return (
    <div style={{padding:"20px"}}>
      <h2>All Candidates</h2>
      {candidates.map(c => (
        <div key={c.id} style={{border:"1px solid gray", margin:"10px", padding:"10px", borderRadius:"6px"}}>
          <h3>{c.name}</h3>
          <p>Email: {c.email}</p>
          <p>Stage: {c.stage}</p>
        </div>
      ))}
    </div>
  );
}
