const Header = () => {
  return (
    <header className="bg-dark-cyan font-spartan h-40">
      {/* Mobile Design*/}
      <img
        src="/images/bg-header-mobile.svg"
        alt="image-background"
        className="sm:hidden w-full h-full object-cover"
      />

      {/* Desktop Design*/}
      <img
        src="/images/bg-header-desktop.svg"
        alt="image-background"
        className="hidden sm:block w-full h-full object-cover"
      />
    </header>
  );
};

export default Header;
