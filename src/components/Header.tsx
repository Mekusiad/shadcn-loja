import CartSidebar from "./cart/CartSidebar";
import Logo from "./Logo";
import { ToogleTheme } from "./ToogleTheme";

function Header() {
  return (
    <header className="flex justify-between items-center my-5 mx-3">
      <div className="flex items-center gap-3">
        <Logo />
        <ToogleTheme />
      </div>
      <div className="flex items-center gap-3">
        <CartSidebar />
      </div>
    </header>
  );
}

export default Header;
