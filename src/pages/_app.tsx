import { AppProps } from 'next/app';
import { CarProvider } from '../context/CarContext';
import { GlobalStyles } from '../styles/GlobalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CarProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </CarProvider>
  );
}

export default MyApp;
