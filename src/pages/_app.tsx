import Layout from "@/components/layout";
import {ToastProvider} from "@/components/toast-provider";
import "@/styles/globals.css";
import theme from "@/styles/theme";
import type {AppProps} from "next/app";
import {ThemeProvider} from "styled-components";

export default function App({Component, pageProps}: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <ToastProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ToastProvider>
        </ThemeProvider>
    );
}
