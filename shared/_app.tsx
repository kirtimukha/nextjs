import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import {GlobalStyle} from './_global-style';
import { theme } from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Head>

                <meta charSet="utf-8" />
                <meta httpEquiv="cache-control" content="no-cache"/>
                <meta httpEquiv="expires" content="0"/>
                <meta httpEquiv="pragma" content="no-cache"/>
                <base href="/"/>
                <link rel="icon" href="https://file.valofe.com/Valofe_file/web/favicon/vfun_favicon.ico"/>
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=no"/>

                <title>VFUN Lounge</title>
                <meta name="application-name" content="VFUN LOUNGE"/>
                <meta name="theme-color" content="#282a32"/>
                <meta name="description" content="VFUN"/>
                <meta name="keywords" content="VFUN LOUNGE KEYWORDS"/>
                <meta property="og:title" content="VFUN LOUNGE"/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://vfun-lounge.valofe.com/ "/>
                <meta property="og:image" content="https://file.valofe.com/Valofe_file/web/meta/meta-fb-lostsaga-cn.jpg"/>
                <meta property="og:site_name" content="VFUN LOUNGE"/>
                <meta property="og:description" content="VFUN LOUNGE DESCRIPTION！"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content="VFUN LOUNGE"/>
                <meta name="twitter:description" content="VFUN LOUNGE DESCRIPTION！"/>
                <meta name="twitter:image" content="https://file.valofe.com/Valofe_file/web/meta/meta-tw-lostsaga-cn.jpg"/>
                <meta itemProp="image" content="https://file.valofe.com/Valofe_file/web/meta/meta-fb-lostsaga-cn.jpg"/>
                <meta content="yes" name="apple-mobile-web-app-capable"/>
                <meta content="yes" name="mobile-web-app-capable"/>
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="https://file.valofe.com/Valofe_file/web/common/images/vfun/apple-touch-icon-57x57.png"/>
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="https://file.valofe.com/Valofe_file/web/common/images/vfun/apple-touch-icon-72x72.png"/>
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="https://file.valofe.com/Valofe_file/web/common/images/vfun/apple-touch-icon-76x76.png"/>
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="https://file.valofe.com/Valofe_file/web/common/images/vfun/apple-touch-icon-114x114.png"/>
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="https://file.valofe.com/Valofe_file/web/common/images/vfun/apple-touch-icon-120x120.png"/>
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="https://file.valofe.com/Valofe_file/web/common/images/vfun/apple-touch-icon-144x144.png"/>
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="https://file.valofe.com/Valofe_file/web/common/images/vfun/apple-touch-icon-152x152.png"/>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="https://file.valofe.com/Valofe_file/web/common/images/vfun/apple-touch-icon-180x180.png"/>
                <GlobalStyle/>
            </Head>
            <ThemeProvider theme={ theme }>
                <Component {...pageProps} />
            </ThemeProvider>
        </>
    );
}

export default MyApp;
