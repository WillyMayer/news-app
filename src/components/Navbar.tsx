const Navbar = () => {
  return (
    <nav>
      <ul className="navbarList flex items-end justify-center gap-4 border-2 border-green-500 font-playfair-display">
        <li className="navbarItem">
          <a href="/business" className="hover:underline">
            Business
          </a>
        </li>
        <li className="navbarItem">
          <a href="/technology" className="hover:underline">
            Technology
          </a>
        </li>
        <li className="navbarItem text-4xl">
          <a href="/" className="underline">
            Spotlight
          </a>
        </li>
        <li className="navbarItem">
          <a href="/entertainment" className="hover:underline">
            Entertainment
          </a>
        </li>
        <li className="navbarItem">
          <a href="/sport" className="hover:underline">
            Sport
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
