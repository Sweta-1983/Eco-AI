import { Link } from 'react-router-dom';
import { PageContainer } from '../components/layout';
import { Card } from '../components/ui';
import { ROUTES } from '../constants/routes.js';

export default function NotFound() {
  return (
    <PageContainer title="Page not found" subtitle="The page you requested does not exist.">
      <Card>
        <Link className="inline-flex h-10 items-center justify-center rounded-md bg-brand-600 px-4 text-sm font-medium text-white transition hover:bg-brand-700" to={ROUTES.HOME}>
          Go home
        </Link>
      </Card>
    </PageContainer>
  );
}
