import { PageContainer } from '../components/layout';
import { EmptyState } from '../components/ui';

export default function Bookings() {
  return (
    <PageContainer title="Bookings" subtitle="Stay Booking and Experience Booking.">
      <EmptyState title="Booking module placeholder" description="Feature-specific UI will live under features/booking." />
    </PageContainer>
  );
}
