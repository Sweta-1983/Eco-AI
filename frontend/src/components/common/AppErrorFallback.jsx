import { ErrorMessage } from '../ui';

export function AppErrorFallback({ message }) {
  return (
    <div className="p-6">
      <ErrorMessage message={message} />
    </div>
  );
}
