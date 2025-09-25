import { appWithTranslation } from 'next-i18next';
import Layout from '@/components/Layout/Layout';
import AOSProvider from '@/components/Animations/AOSProvider';
import '@/app/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <AOSProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AOSProvider>
  );
}

export default appWithTranslation(MyApp);
