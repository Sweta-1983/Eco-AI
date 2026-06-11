import { PageContainer } from '../components/layout';
import { EmptyState } from '../components/ui';

export default function TripPlanner() {
  return (
    <PageContainer title="Trip Planner" subtitle="AI Trip Planner, Budget Estimator, and Route Optimizer.">
      <EmptyState title="Planner module placeholder" description="Feature-specific UI will live under features/planner." />
    </PageContainer>
  );
}
