import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { useEffect, useState } from "react";

export default function NavBar() {
  const [hash, setHash] = useState<string>();

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <>
      <Navbar
        isBordered
        classNames={{
          base: "h-[55px] w-[200px] m-auto",
          wrapper: "px-0 h-auto",
          content: "!justify-center",
        }}
        className="rounded-full border-2"
      >
        <NavbarContent>
          <NavbarItem isActive={["", "#home"].includes(hash!)}>
            <Link color="foreground" href="#home">
              Home
            </Link>
          </NavbarItem>
          <NavbarItem isActive={hash === "#projects"}>
            <Link color="foreground" href="#projects">
              Projects
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
}
