import { Link } from 'react-router-dom';
import { ROUTES } from '../constants/routes.js';
import { Button, Card, Input } from '../components/ui';

export default function Login() {
  return (
    <Card className="w-full max-w-md">
      <h1 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Login</h1>
      <div className="mt-6 space-y-4">
        <Input id="email" label="Email" placeholder="you@example.com" type="email" />
        <Input id="password" label="Password" placeholder="Password" type="password" />
        <Button className="w-full">Login</Button>
      </div>
      <Link className="mt-4 block text-sm text-brand-700 dark:text-brand-100" to={ROUTES.FORGOT_PASSWORD}>
        Forgot password?
      </Link>
    </Card>
  );
}
