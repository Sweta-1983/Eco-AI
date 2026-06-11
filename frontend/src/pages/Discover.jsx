import { PageContainer } from '../components/layout';
import { EmptyState } from '../components/ui';

export default function Discover() {
  return (
    <PageContainer title="Discover" subtitle="Smart Travel Map, AI Recommendations, Stays, Experiences, and Hidden Gems.">
      <EmptyState title="Discover module placeholder" description="Feature-specific UI will live under features/discover." />
    </PageContainer>
  );
}
