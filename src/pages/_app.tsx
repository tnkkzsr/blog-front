import { AuthProvider } from '@/features/user/contexts/AuthContext'
import { CategoryProvider } from '@/features/category/contexts/CategoryContext'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CategoryProvider>
        <Component {...pageProps} />
      </CategoryProvider>
    </AuthProvider>
  );
}
