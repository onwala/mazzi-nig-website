import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    number: 1,
    title: 'Initial Assessment',
    body: 'We review your existing management practices, documentation, and organisational context against the target standard requirements.',
  },
  {
    number: 2,
    title: 'Gap Analysis',
    body: 'A detailed gap report maps every non-conformance and partial compliance, with a prioritised remediation roadmap and timeline.',
  },
  {
    number: 3,
    title: 'System Development',
    body: 'We develop and tailor all QMS/EMS/OHSMS documentation — manuals, procedures, records — to your specific operations and scope.',
  },
  {
    number: 4,
    title: 'Training & Implementation',
    body: 'We train your team on the new system, conduct internal audits, and support management review to drive genuine operational embedding.',
  },
  {
    number: 5,
    title: 'Certification Audit',
    body: 'Full support during Stage 1 and Stage 2 certification audits, including liaison with the certification body and closure of findings.',
  },
];
