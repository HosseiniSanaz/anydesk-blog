import {Head, Html, Main, NextScript} from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <title>AnyDesk Blog</title>
                <meta name="description" content="Stay up to date with the latest news" />
            
                <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>
            </Head>
            <body className="antialiased">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
