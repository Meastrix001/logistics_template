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
    quote: {
      path: `/${lang}/quote`,
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
      quote: {
        path: `/${lang}/quote`,
        label: "nav.keys.offer",
      } as Route,
    },
  }
}