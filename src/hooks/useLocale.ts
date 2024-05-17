"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";

const useLocale = () => {
  const path = usePathname();

  const locale: string = useMemo(() => path.split("/")[1], [path]);

  return locale;
};

export default useLocale;
