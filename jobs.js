export const jobs = Array.from({length: 10}, (_, i) => ({
  id: i+1,
  title: `Frontend Developer ${i+1}`,
  slug: `frontend-dev-${i+1}`,
  status: Math.random() > 0.7 ? "archived" : "active",
  tags: ["React", "JavaScript"],
  order: i+1
}));
