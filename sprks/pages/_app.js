import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import Store from './Store';

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  );
}

export default MyApp;
