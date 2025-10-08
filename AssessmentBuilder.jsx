import React, { useEffect, useState } from "react";
import { db } from "../../utils/storage";

export default function AssessmentBuilder() {
  const [assessments, setAssessments] = useState([]);

  useEffect(() => {
    db.assessments.toArray().then(setAssessments);
  }, []);

  return (
    <div style={{padding:"20px"}}>
      <h2>Assessments</h2>
      {assessments.map(a => (
        <div key={a.jobId} style={{border:"1px solid gray", margin:"10px", padding:"10px", borderRadius:"6px"}}>
          <h3>Job ID: {a.jobId}</h3>
          {a.data.map(q => (
            <p key={q.id}>{q.question}</p>
          ))}
        </div>
      ))}
    </div>
  );
}
