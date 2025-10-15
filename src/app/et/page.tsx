import { Metadata } from "next";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { brand } from "@/theme/brand.config";
import Home from "@/pageComponents/landing/page";

const pageLanguage = "et"


export default function LandingPageEt() {
    return <Home />
}


export const metadata: Metadata = {
    alternates: {
        canonical: `${brand.company.site}et/`,
        languages: {
            en: `${brand.company.site}et/`,
            et: `${brand.company.site}`,
        },
    },
    title: LanguageKeys[pageLanguage].SEO.landing.title,
    description: LanguageKeys[pageLanguage].SEO.landing.desc,
    openGraph: {
        title: LanguageKeys[pageLanguage].SEO.landing.title,
        description: LanguageKeys[pageLanguage].SEO.landing.desc,
        url: `${brand.company.site}et/`,
        siteName: brand.company.name,
        images: [
            {
                url: brand.company.logo.src,
                width: 1200,
                height: 630,
                alt: `${brand.company.name} hero image`,
            },
        ],
        type: "website",
    },
};

