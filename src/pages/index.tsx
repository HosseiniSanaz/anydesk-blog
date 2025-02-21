import Image from "next/image";

export default function Home() {
  return (
    <div
      className={`grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20`}
    >
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">

      </main>
      <footer className="row-start-3 flex flex-row gap-6 flex-wrap items-center justify-center">
          <a href="https://www.linkedin.com/in/hosseinisanaz/" target="_blank" rel="noopener noreferrer">
            © 2025 Powered by <b>Sanaz</b>
          </a>
          <Image src="/logo.png" alt="Anydesk Logo" width={72} height={18} />
      </footer>
    </div>
  );
}
