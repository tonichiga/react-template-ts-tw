import { useTranslations } from "next-intl";
import LocaleSwitcher from "../../../shared/components/locale/locale-switcher";
import NavigationLink from "../../../shared/components/navigate/navigation-link";

export default function Navigation() {
  const t = useTranslations("Navigation");

  return (
    <div className="bg-slate-850">
      <nav className="container flex justify-between p-2 text-white">
        <div>
          <NavigationLink href="/">{t("home")}</NavigationLink>
        </div>
        <LocaleSwitcher />
      </nav>
    </div>
  );
}
