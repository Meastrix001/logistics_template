import { Route } from "@/models/Routes";

export const pageRoutes = (lang: "en" | "et") => {
  return {
    home: {
      path: lang === "en" ? "/en/" : "/",
      label: "nav.keys.home",
    } as Route,
    about: {
      path: `/${lang}/about`,
      label: "nav.keys.about",
    } as Route,
    contact: {
      path: `/${lang}/contact`,
      label: "nav.keys.contact",
    } as Route,
    terms: {
      path: `/${lang}/terms`,
      label: "nav.keys.terms",
    } as Route,
    offer: {
      path: `/${lang}/offer`,
      label: "",
    } as Route,
    // Nav
    nav: {
      home: {
        path: lang === "en" ? "/en/" : "/",
        label: "nav.keys.home",
      } as Route,
      about: {
        path: `/${lang}/about`,
        label: "nav.keys.about",
      } as Route,
      contact: {
        path: `/${lang}/contact`,
        label: "nav.keys.contact",
      } as Route,
      terms: {
        path: `/${lang}/terms`,
        label: "nav.keys.terms",
      } as Route,
      offer: {
        path: `/${lang}/offer`,
        label: "nav.keys.offer",
      } as Route,
    },
  }
}