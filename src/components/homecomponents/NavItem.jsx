const { default: Link } = require("next/link");
const { usePathname } = require("next/navigation");

const NavItem = ({ href, label, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <li
      className={`before:w-0 hover:before:w-full before:bg-orange-500 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px] before:left-0 capitalize transition-all duration-300 cursor-pointer ${
        isActive
          ? "text-orange-500 dark:text-orange-400 before:w-full"
          : "text-[#424242] dark:text-[#eff3f5]"
      }`}
      onClick={onClick}
    >
      <Link href={href}>{label}</Link>
    </li>
  );
};

export default NavItem;
