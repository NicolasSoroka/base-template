const Layout = ({ children }) => {
  return (
    <div className="container mx-auto flex h-screen flex-col justify-between">
      <header>check</header>
      <main className="flex h-full">{children}</main>
      <footer>test footer</footer>
    </div>
  );
};

export default Layout;
