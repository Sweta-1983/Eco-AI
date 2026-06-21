const DEMO_USER = {
  id: 1,
  name: 'Demo User',
  email: 'demo@ecostay.ai',
};

export const mockAuthService = {
  login: async ({ email, password }) => {
    await new Promise((resolve) => setTimeout(resolve, 650));

    if (!email || !password) {
      throw new Error('Email and password are required');
    }

    if (email === 'network@ecostay.ai') {
      throw new Error('We could not reach the auth service. Please try again.');
    }

    if (email === 'demo@ecostay.ai' && password === 'password123') {
      return {
        token: 'demo-token',
        user: DEMO_USER,
      };
    }

    throw new Error('Invalid email or password');
  },
  register: async ({ email, fullName }) => {
    await new Promise((resolve) => setTimeout(resolve, 650));

    if (!fullName || !email) {
      throw new Error('Please complete the required fields');
    }

    if (email === 'network@ecostay.ai') {
      throw new Error('We could not create your account right now. Please try again.');
    }

    return {
      token: `demo-token-${Date.now()}`,
      user: {
        id: Date.now(),
        name: fullName,
        email,
      },
    };
  },
  forgotPassword: async () => {
    await new Promise((resolve) => setTimeout(resolve, 500));

    return { success: true };
  },
};
