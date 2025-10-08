export const assessments = Array.from({length: 3}, (_, i) => ({
  jobId: i+1,
  data: Array.from({length:5}, (__, j) => ({
    id: j+1,
    question: `Question ${j+1} for Job ${i+1}?`,
    type: ["short","long","numeric"][Math.floor(Math.random()*3)],
    required: Math.random()>0.3
  }))
}));
