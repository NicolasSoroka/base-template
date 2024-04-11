const Layout = ({ children }) => {
  return (
    <div className="container mx-auto flex h-screen flex-col justify-between">
      <header>Cambios en el template</header>
      <main className="flex h-full">{children}</main>
      <footer>test footer</footer>
    </div>
  );
};

export default Layout;
