import { Metadata } from "next";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { brand } from "@/theme/brand.config";
import { JobsPage } from "@/pageComponents/jobs/page";

const pageLanguage = "et"


export default function JobsPageEt() {
    return <JobsPage />
}


export const metadata: Metadata = {
    alternates: {
        canonical: `${brand.company.site}et/jobs`,
        languages: {
            en: `${brand.company.site}en/jobs`,
            et: `${brand.company.site}et/jobs`,
        },
    },
    title: LanguageKeys[pageLanguage].SEO.landing.title,
    description: LanguageKeys[pageLanguage].SEO.landing.desc,
    openGraph: {
        title: LanguageKeys[pageLanguage].SEO.landing.title,
        description: LanguageKeys[pageLanguage].SEO.landing.desc,
        url: `${brand.company.site}et/jobs`,
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

