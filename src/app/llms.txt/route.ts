import { NextResponse } from 'next/server';
import { servicesData } from '@/lib/services';

export async function GET() {
  const content = `
# exceln8n Agency

exceln8n is a premium digital marketing agency driving explosive growth for futuristic brands. 
We leverage data science, AI automation, and advanced performance marketing to achieve measurable pipeline generation.

## Core Services

${servicesData.map(s => `- **${s.title}**: ${s.description}`).join('\n')}

## Our Philosophy

We believe marketing is an exact science. Our proprietary framework focuses on Traffic Acquisition, Conversion Optimization, and Lifetime Value Expansion. We routinely achieve 250% average ROI increases and 65% reduction in Customer Acquisition Cost (CAC).

## Contact Information
- **Email:** hello@exceln8n.space
- **Phone:** +1 (555) 123-4567

To learn more, navigate to our core site at https://exceln8n.space
`;

  return new NextResponse(content.trim(), {
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
