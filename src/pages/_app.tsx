import type { AppProps } from "next/app"
import Layout from "../app/layout/layout"
import "../app/styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp

