import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import Typography from '@mui/material/Typography';

const experiences = [
  {
    role: "Intern — Brainmage.AI",
    period: "Dec 2024 — Present",
    description: "Constructing regional language LLMs using LLaMA models."
  },
  {
    role: "Intern — RINL Steel Plant",
    period: "May 2024 — Jun 2024",
    description: "Built a full-stack library management system."
  }
];

function Experience() {
  return (
    <div style={{ padding: 24, width: '100%' }}>
      <Typography variant="h4" gutterBottom>Experience</Typography>
      <Timeline position="alternate">
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot color="primary" />
              {index !== experiences.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6">{exp.role}</Typography>
              <Typography variant="body2" color="text.secondary">{exp.period}</Typography>
              <Typography variant="body1">{exp.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}

export default Experience;
