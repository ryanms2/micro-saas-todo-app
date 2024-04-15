export const config = {
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY,
    webhookSecret: process.env.STRIPE_WEBHOOK_SECRET,
    plans: {
      free: {
        priceId: 'price_1P4TjiJR0jKF0dJOqwBhphP9',
        quota: {
          TASKS: 5,
        },
      },
      pro: {
        priceId: 'price_1P4TjuJR0jKF0dJODv3TdCnp',
        quota: {
          TASKS: 100,
        },
      },
    },
  },
}
