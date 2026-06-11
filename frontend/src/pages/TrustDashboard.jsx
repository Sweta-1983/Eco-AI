import { PageContainer } from '../components/layout';
import { EmptyState } from '../components/ui';

export default function TrustDashboard() {
  return (
    <PageContainer title="Trust Dashboard" subtitle="Trust Score, Safety Score, and Sustainability Dashboard.">
      <EmptyState title="Trust module placeholder" description="Feature-specific UI will live under features/trust." />
    </PageContainer>
  );
}
