import Layout from "@/components/layouts/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { CountProvider } from "@/context/CountContext";
import { AuthProvider } from "@/context/AuthContex";
import { ThemeProvider } from "@/context/themeContext";
export default function App({ Component, pageProps }: AppProps) {
  return (
	<ThemeProvider>
  <AuthProvider>
      <CountProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CountProvider>
    </AuthProvider>
	</ThemeProvider>
  
  );
}
