import * as Sentry from '@sentry/nextjs';

export const initMonitoring = () => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
      tracesSampleRate: 1.0,
      environment: process.env.NODE_ENV,
      beforeSend(event) {
        // Sanitizar datos sensibles
        if (event.request?.headers) {
          delete event.request.headers['authorization'];
          delete event.request.headers['cookie'];
        }
        return event;
      },
    });
  }
};

export const logError = (error: Error, context?: Record<string, any>) => {
  if (process.env.NODE_ENV === 'production') {
    Sentry.captureException(error, {
      extra: {
        ...context,
        timestamp: new Date().toISOString(),
      },
    });
  } else {
    console.error('Error:', error, 'Context:', context);
  }
};
