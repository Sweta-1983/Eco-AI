import { PageContainer } from '../components/layout';
import { Badge, Card } from '../components/ui';

export default function Home() {
  return (
    <PageContainer title="EcoStay AI" subtitle="AI-powered sustainable tourism platform.">
      <Card>
        <Badge>Placeholder</Badge>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">Public home page architecture placeholder.</p>
      </Card>
    </PageContainer>
  );
}
