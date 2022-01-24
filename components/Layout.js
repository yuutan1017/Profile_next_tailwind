import Head from "next/head";
import Link from "next/link";


export default function Layout({ children, title = "Ylog" }) {
  return (
    <div className="flex justify-center items-center flex-col min-h-screen text-gray-600 text-sm font-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-blue-400 w-screen">
          <div className="flex items-center pl-8 h-14">
            <Link href="/">
              <a className="text-white text-2xl ml-10">Ylog</a>
            </Link>
            <div className="flex space-x-4 ml-auto mr-10">
              <Link href="/">
                <a className="text-white hover:bg-gray-600 px-3 py-2 rounded text-xl">
                  Home
                </a>
              </Link>
              <Link href="/profile-page">
                <a className="text-white hover:bg-gray-600 px-3 py-2 rounded text-xl">
                  About
                </a>
              </Link>
              <Link href="/skills-page">
                <a className="text-white hover:bg-gray-600 px-3 py-2 rounded text-xl">
                  Skills
                </a>
              </Link>
              <Link href="/contact-page">
                <a className="text-white hover:bg-gray-600 px-3 py-2 rounded text-xl">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="flex flex-1 justify-center items-center flex-col w-screen from-teal-400 bg-gradient-to-r from-white to-blue-300">
        {children}
      </main>
      <footer className="w-full h-10 flex justify-center items-center border-t-4">
        <a className="flex items-center">copyright@2022 yuutan</a>
      </footer>
    </div>
  );
}
