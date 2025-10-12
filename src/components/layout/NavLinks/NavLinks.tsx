"use client";
import React, { useEffect, useState } from "react";
import { Text } from "@radix-ui/themes";
import { Route } from "@/models/Routes";
import { NavLinksProps } from "./NavLinks.types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { pageRoutes } from "@/routes/siteRoutes.est";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { getNestedValue } from "@/utils/getNestedValues";
import { useLanguageStore } from "@/store/appStore";


const NavLinks: React.FC<NavLinksProps> = ({ onClick }) => {
  const language = useLanguageStore((s) => s.language)

  const [activeSiteRoutes, setActiveSiteRoutes] = useState(pageRoutes(language))
  const pathname = usePathname();

  useEffect(() => {
    setActiveSiteRoutes(pageRoutes(language))
  }, [language])



  return (
    <>
      {Object.values(activeSiteRoutes.nav).map((route: Route, index) => {
        return (
          <Link
            key={index}
            href={route.path}
            title={route.label}
            onClick={onClick}

          >
            <Text
              as="p"
              style={{
                color: "black",
                borderBottom:
                  pathname.replaceAll("/", "").replaceAll("/et/", "").replaceAll("/en/", "") ===
                    route.path.replaceAll("/", "").replaceAll("/et/", "").replaceAll("/en/", "")
                    ? "2px solid var(--accent-a9)"
                    : "",
              }}
              size="5"
            >

              {getNestedValue(LanguageKeys[language], route.label) || ""}

            </Text>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
