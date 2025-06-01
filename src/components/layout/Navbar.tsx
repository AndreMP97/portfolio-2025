// Assets
import Photo from "assets/photo.jpg";

// Constants
import { sections } from "constants/sections";
import { urls } from "constants/urls";

// Components
import { NavLink } from "components/navLink";

export const Navbar: React.FC = () => {
  return (
    <header className="border-b-space-blue fixed z-50 flex h-20 w-full items-center justify-center border-b border-solid px-10 py-3 whitespace-nowrap backdrop-blur-xs">
      <nav className="container flex w-full flex-1 items-center justify-between">
        {/* Logo */}
        <a
          className="font-great-vibes hover:text-aqua-mint -rotate-12 text-3xl leading-tight font-bold text-white"
          href="#"
        >
          AP
        </a>
        {/* Links */}
        <div className="flex items-center gap-6">
          {/* Nav Links */}
          <ul className="flex items-center gap-6">
            {Object.values(sections)
              .filter((section) => section.showInNavbar)
              .map((link) => (
                <li key={link.id}>
                  <NavLink {...link} />
                </li>
              ))}
          </ul>
          {/* LinkedIn link with picture */}
          <a
            className="border-space-blue size-12 rounded-full border-2"
            href={urls.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="aspect-square rounded-full bg-cover bg-center bg-no-repeat hover:opacity-60"
              src={Photo}
              alt="Photo of André Pacheco"
            />
          </a>
        </div>
      </nav>
    </header>
  );
};
