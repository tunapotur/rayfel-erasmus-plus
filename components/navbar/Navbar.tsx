import { NavbarActionProvider } from "./NavbarContext";
import { NavbarOperations } from "./NavbarOperations";

export default function Navbar() {
  return (
    <NavbarActionProvider>
      <NavbarOperations />
    </NavbarActionProvider>
  );
}
