import bgMobile from "../../public/images/bg-header-mobile.svg";
import bgDesktop from "../../public/images/bg-header-desktop.svg";

export default function Header() {  
  return (
    <header className="w-full bg-green-400">
      <picture className="w-full">
        <source media="(min-width: 768px)" srcSet={bgDesktop} />
        <img src={bgMobile} className="h-39 w-full object-cover" alt="" />
      </picture>
    </header>
  );
}
