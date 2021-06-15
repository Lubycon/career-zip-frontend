import ReactDOM from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import App from 'components/App';
import 'reset-css';

Sentry.init({
  dsn: process.env.ENV_DEV_SENTRY_DSN,
  integrations: [new Integrations.BrowserTracing()],

  tracesSampleRate: 1.0,
});

ReactDOM.render(<App />, document.getElementById('root'));
