import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, LoaderCircle, Mail } from 'lucide-react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { ROUTES } from '../../../constants/routes.js';
import { cn } from '../../../utils/cn.js';
import { AuthFormWrapper } from '../components/AuthFormWrapper.jsx';
import { AuthHeader } from '../components/AuthHeader.jsx';
import { PasswordInput } from '../components/PasswordInput.jsx';
import { SocialLoginButton } from '../components/SocialLoginButton.jsx';
import { useAuth } from '../hooks/useAuth.js';

export default function LoginPage() {
  const { loading, login } = useAuth();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
      remember: true,
    },
  });

  const onSubmit = async (values) => {
    try {
      await login(values);
    } catch {
      // Toast and Redux state are handled in useAuth.
    }
  };

  const onInvalid = () => {
    toast.error('Please fix the highlighted fields');
  };

  return (
    <AuthFormWrapper>
      <AuthHeader
        eyebrow="Welcome back"
        title="Sign in to your travel workspace"
        description="Use demo@ecostay.ai and password123 to explore the private EcoStay AI experience."
      />
      <form className="mt-8 space-y-5" onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <label className="block" htmlFor="email">
          <span className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">Email</span>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              id="email"
              className={cn(
                'h-12 w-full rounded-2xl border border-slate-200 bg-white/90 pl-11 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-brand-900/40',
                errors.email && 'border-red-400 focus:border-red-500 focus:ring-red-100',
              )}
              placeholder="demo@ecostay.ai"
              type="email"
              autoComplete="email"
              autoFocus
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Enter a valid email address',
                },
              })}
            />
          </div>
          {errors.email && <span className="mt-1.5 block text-sm font-medium text-red-600">{errors.email.message}</span>}
        </label>
        <PasswordInput
          error={errors.password?.message}
          id="password"
          label="Password"
          placeholder="password123"
          autoComplete="current-password"
          registration={register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
        />
        <div className="flex items-center justify-between gap-4">
          <label className="flex items-center gap-2 text-sm font-medium text-slate-600 dark:text-slate-300">
            <input className="h-4 w-4 rounded border-slate-300 text-brand-600 focus:ring-brand-500" type="checkbox" {...register('remember')} />
            Remember me
          </label>
          <Link className="text-sm font-bold text-brand-700 transition hover:text-brand-800 dark:text-brand-200" to={ROUTES.FORGOT_PASSWORD}>
            Forgot Password?
          </Link>
        </div>
        <Motion.button
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={loading}
          type="submit"
          whileTap={{ scale: 0.98 }}
        >
          {loading && <LoaderCircle className="animate-spin" size={18} />}
          {loading ? 'Signing in...' : 'Login'}
          {!loading && <ArrowRight size={18} />}
        </Motion.button>
      </form>
      <div className="my-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        or
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
      </div>
      <SocialLoginButton onClick={() => toast('Google login is UI only for this demo.')}>Continue with Google</SocialLoginButton>
      <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
        New to EcoStay AI?{' '}
        <Link className="font-bold text-brand-700 dark:text-brand-200" to={ROUTES.REGISTER}>
          Create an account
        </Link>
      </p>
    </AuthFormWrapper>
  );
}
