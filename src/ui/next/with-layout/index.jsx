export default function withLayout(Page) {
  return function WrappedComponent({ children }) {
    return (
      <div className="container mx-auto font-light text-white">
        <header className="">
          <div className="mx-auto relative w-[100%] flex items-center justify-center bg-slate-700 p-4">
            <span className="text-2xl font-bold">30 Components - 30 Days</span>
          </div>
        </header>
        <main className="">
          <Page>{children}</Page>
        </main>
        <footer className="mt-[45%] w-[100%] bg-slate-800 p-6 text-center">
          <p className="text-center text-blue-300 font-bold">If you find this useful, give us a star on  <a className="text-white" href="https://github.com/devmentorlive-youtube/30-components-in-30-days">Github</a></p>
        </footer>
      </div>
    );
  };
}
