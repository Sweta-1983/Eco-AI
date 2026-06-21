import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowLeft, LoaderCircle, Mail, SendHorizonal } from 'lucide-react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { ROUTES } from '../../../constants/routes.js';
import { cn } from '../../../utils/cn.js';
import { AuthFormWrapper } from '../components/AuthFormWrapper.jsx';
import { AuthHeader } from '../components/AuthHeader.jsx';
import { mockAuthService } from '../services/authService.js';

export default function ForgotPasswordPage() {
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async () => {
    await mockAuthService.forgotPassword();
    toast.success('Password reset link sent successfully');
    reset();
  };

  const onInvalid = () => {
    toast.error('Please fix the highlighted fields');
  };

  return (
    <AuthFormWrapper>
      <AuthHeader
        eyebrow="Reset access"
        title="Get back to your saved places"
        description="Enter your email and we will send a reset link for your EcoStay AI account."
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
              placeholder="you@example.com"
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
        <Motion.button
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isSubmitting}
          type="submit"
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting && <LoaderCircle className="animate-spin" size={18} />}
          {isSubmitting ? 'Sending...' : 'Send Reset Link'}
          {!isSubmitting && <SendHorizonal size={18} />}
        </Motion.button>
      </form>
      <Link className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-700 transition hover:text-brand-800 dark:text-brand-200" to={ROUTES.LOGIN}>
        <ArrowLeft size={17} />
        Back to Login
      </Link>
    </AuthFormWrapper>
  );
}
