import Image from "next/image";

function Footer() {
    return (
        <footer className="row-start-3 flex flex-row gap-6 flex-wrap items-center justify-center">
            <a href="https://www.linkedin.com/in/hosseinisanaz/" target="_blank" rel="noopener noreferrer">
                © 2025 Powered by <b>Sanaz</b>
            </a>
            <Image src="/logo.png" alt="Anydesk Logo" width={72} height={18}/>
        </footer>
    )
}

export default Footer;
