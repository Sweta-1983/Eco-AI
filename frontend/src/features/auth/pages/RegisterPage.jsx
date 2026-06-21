import { createElement } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, LoaderCircle, Mail, Phone, UserRound, XCircle } from 'lucide-react';
import toast from 'react-hot-toast';
import { useForm } from 'react-hook-form';
import { ROUTES } from '../../../constants/routes.js';
import { cn } from '../../../utils/cn.js';
import { AuthFormWrapper } from '../components/AuthFormWrapper.jsx';
import { AuthHeader } from '../components/AuthHeader.jsx';
import { PasswordInput } from '../components/PasswordInput.jsx';
import { SocialLoginButton } from '../components/SocialLoginButton.jsx';
import { mockAuthService } from '../services/authService.js';

const getPasswordScore = (password) => {
  if (!password) {
    return 0;
  }

  return [
    password.length >= 8,
    /[A-Z]/.test(password),
    /[a-z]/.test(password),
    /\d/.test(password),
    /[^A-Za-z0-9]/.test(password),
  ].filter(Boolean).length;
};

export default function RegisterPage() {
  const navigate = useNavigate();
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    watch,
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');
  const passwordScore = getPasswordScore(password);
  const passwordStrength = ['Too weak', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent'][passwordScore];
  const passwordsMatch = confirmPassword && password === confirmPassword;

  const onSubmit = async (values) => {
    try {
      await mockAuthService.register(values);
      toast.success('Registration Successful');
      navigate(ROUTES.LOGIN, { replace: true });
    } catch (error) {
      toast.error(error.message || 'Could not create your account. Please try again.');
    }
  };

  const onInvalid = () => {
    toast.error('Please fix the highlighted fields');
  };

  const renderTextField = ({ error, icon: Icon, id, label, placeholder, registration, type = 'text' }) => (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-sm font-semibold text-slate-700 dark:text-slate-200">{label}</span>
      <div className="relative">
        {createElement(Icon, { className: 'absolute left-4 top-1/2 -translate-y-1/2 text-slate-400', size: 18 })}
        <input
          id={id}
          className={cn(
            'h-12 w-full rounded-2xl border border-slate-200 bg-white/90 pl-11 pr-4 text-sm text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-brand-500 focus:ring-4 focus:ring-brand-100 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:focus:ring-brand-900/40',
            error && 'border-red-400 focus:border-red-500 focus:ring-red-100',
          )}
          placeholder={placeholder}
          type={type}
          autoComplete={id === 'email' ? 'email' : id === 'phone' ? 'tel' : 'name'}
          autoFocus={id === 'fullName'}
          {...registration}
        />
      </div>
      {error && <span className="mt-1.5 block text-sm font-medium text-red-600">{error}</span>}
    </label>
  );

  return (
    <AuthFormWrapper>
      <AuthHeader
        eyebrow="Create your account"
        title="Start planning trips that support local communities"
        description="Build a profile for verified stays, saved places, community pins, and AI-powered itineraries."
      />
      <form className="mt-8 grid gap-5" onSubmit={handleSubmit(onSubmit, onInvalid)}>
        {renderTextField({
          error: errors.fullName?.message,
          icon: UserRound,
          id: 'fullName',
          label: 'Full Name',
          placeholder: 'Your full name',
          registration: register('fullName', { required: 'Full name is required' }),
        })}
        {renderTextField({
          error: errors.email?.message,
          icon: Mail,
          id: 'email',
          label: 'Email',
          placeholder: 'you@example.com',
          registration: register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          }),
          type: 'email',
        })}
        {renderTextField({
          error: errors.phone?.message,
          icon: Phone,
          id: 'phone',
          label: 'Phone Number',
          placeholder: '9876543210',
          registration: register('phone', {
            required: 'Phone number is required',
            validate: (value) => value.replace(/\D/g, '').length >= 10 || 'Phone number must include at least 10 digits',
          }),
          type: 'tel',
        })}
        <PasswordInput
          error={errors.password?.message}
          id="password"
          label="Password"
          placeholder="Create a password"
          autoComplete="new-password"
          registration={register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
            validate: (value) => getPasswordScore(value) >= 3 || 'Use a stronger password',
          })}
        />
        {password && (
          <div aria-live="polite" className="-mt-3">
            <div className="flex h-1.5 overflow-hidden rounded-full bg-slate-200 dark:bg-slate-800">
              <span className="rounded-full bg-brand-600 transition-all" style={{ width: `${Math.max(passwordScore, 1) * 20}%` }} />
            </div>
            <p className="mt-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">Password strength: {passwordStrength}</p>
          </div>
        )}
        <PasswordInput
          error={errors.confirmPassword?.message}
          id="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm your password"
          autoComplete="new-password"
          registration={register('confirmPassword', {
            required: 'Confirm password is required',
            validate: (value) => value === password || 'Passwords must match',
          })}
        />
        {confirmPassword && (
          <p aria-live="polite" className={`-mt-3 flex items-center gap-1.5 text-xs font-semibold ${passwordsMatch ? 'text-brand-700 dark:text-brand-200' : 'text-red-600'}`}>
            {passwordsMatch ? <CheckCircle2 size={15} /> : <XCircle size={15} />}
            {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
          </p>
        )}
        <Motion.button
          className="flex h-12 w-full items-center justify-center gap-2 rounded-2xl bg-brand-600 text-sm font-bold text-white shadow-lg shadow-brand-600/20 transition hover:-translate-y-0.5 hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isSubmitting}
          type="submit"
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting && <LoaderCircle className="animate-spin" size={18} />}
          {isSubmitting ? 'Creating account...' : 'Create Account'}
          {!isSubmitting && <ArrowRight size={18} />}
        </Motion.button>
      </form>
      <div className="my-6 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        or
        <span className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
      </div>
      <SocialLoginButton onClick={() => toast('Google sign up is UI only for this demo.')}>Continue with Google</SocialLoginButton>
      <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
        Already have an account?{' '}
        <Link className="font-bold text-brand-700 dark:text-brand-200" to={ROUTES.LOGIN}>
          Login
        </Link>
      </p>
    </AuthFormWrapper>
  );
}
