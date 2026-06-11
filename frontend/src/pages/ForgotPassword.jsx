import { Button, Card, Input } from '../components/ui';

export default function ForgotPassword() {
  return (
    <Card className="w-full max-w-md">
      <h1 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Forgot Password</h1>
      <div className="mt-6 space-y-4">
        <Input id="email" label="Email" placeholder="you@example.com" type="email" />
        <Button className="w-full">Send reset link</Button>
      </div>
    </Card>
  );
}
