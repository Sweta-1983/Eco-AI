import { PageContainer } from '../components/layout';
import { EmptyState } from '../components/ui';

export default function Profile() {
  return (
    <PageContainer title="Profile" subtitle="User Profile, Saved Places, and Reviews.">
      <EmptyState title="Profile module placeholder" description="Feature-specific UI will live under features/profile." />
    </PageContainer>
  );
}
