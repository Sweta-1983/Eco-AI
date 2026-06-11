import { Button, Card, Input } from '../components/ui';

export default function Register() {
  return (
    <Card className="w-full max-w-md">
      <h1 className="text-xl font-semibold text-slate-950 dark:text-slate-50">Register</h1>
      <div className="mt-6 space-y-4">
        <Input id="name" label="Full name" placeholder="Your name" />
        <Input id="email" label="Email" placeholder="you@example.com" type="email" />
        <Input id="password" label="Password" placeholder="Create a password" type="password" />
        <Button className="w-full">Create account</Button>
      </div>
    </Card>
  );
}
