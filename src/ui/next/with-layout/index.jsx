export default function withLayout(Page) {
  return function WrappedComponent({ children }) {
    return (
      <div className="container mx-auto font-light text-white">
        <header className="">
          <div className="mx-auto relative w-[260px] flex items-center justify-center ">
            awesome app
          </div>
        </header>
        <main className="">
          <Page>{children}</Page>
        </main>
        <footer className="mt-16">
          <p>our footer here</p>
        </footer>
      </div>
    );
  };
}
