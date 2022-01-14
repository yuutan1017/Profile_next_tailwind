import Head from "next/head";
import Link from "next/link";


export default function Layout({ children, title = "Ylog" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-700 w-screen">
          <div className="flex items-center pl-8 h-14">
            <Link href="/">
              <a className="text-white text-xl ml-10">Ylog</a>
            </Link>
            <div className="flex space-x-4 ml-auto mr-10">
              <Link href="/portfolio-page">
                <a className="text-white hover:bg-gray-600 px-3 py-2 rounded">
                  Portfolio
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="text-white hover:bg-gray-600 px-3 py-2 rounded">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen bg-indigo-50">
        {children}
      </main>
      <footer className="w-full h-10 flex justify-center items-center border-t-4">
        <a className="flex items-center">copyright@2022 yuutan</a>
      </footer>
    </div>
  );
}
