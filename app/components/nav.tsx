import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/blog": { name: "Blog", hidden: true },
  "/projects": { name: "Projects", hidden: true },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems)
            .filter(([_, { hidden }]) => !hidden)
            .map(([path, { name }]) => (
              <Link
                key={path}
                href={path}
                className="transition-all hover:text-blue-500 dark:hover:text-blue-400 flex align-middle relative"
              >
                {name}
              </Link>
            ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
