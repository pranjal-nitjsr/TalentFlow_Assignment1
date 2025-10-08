export const candidates = Array.from({length: 50}, (_, i) => ({
  id: i+1,
  name: `Candidate ${i+1}`,
  email: `candidate${i+1}@mail.com`,
  stage: ["applied","screen","tech","offer","hired","rejected"][Math.floor(Math.random()*6)],
  jobId: Math.floor(Math.random()*10)+1
}));
