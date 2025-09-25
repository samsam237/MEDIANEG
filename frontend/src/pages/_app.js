import { appWithTranslation } from 'next-i18next';
import Layout from '@/components/Layout/Layout';
import '../app/globals.css';
import nextI18NextConfig from '../../next-i18next.config';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default appWithTranslation(MyApp, nextI18NextConfig);
