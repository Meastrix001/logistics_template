import { QuotePage } from "@/pageComponents/quote/page";
import { brand } from "@/theme/brand.config";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Metadata } from "next";

const pageLanguage = "et"


export default function QuotePageEt() {
    return <QuotePage />
}

export const metadata: Metadata = {
    alternates: {
        canonical: `${brand.company.site}${pageLanguage}/quote`,
        languages: {
            en: `${brand.company.site}en/quote`,
            et: `${brand.company.site}et/quote`,
        },
    },
    title: LanguageKeys[pageLanguage].SEO.review.title,
    description: LanguageKeys[pageLanguage].SEO.review.desc,
    openGraph: {
        title: LanguageKeys[pageLanguage].SEO.review.title,
        description: LanguageKeys[pageLanguage].SEO.review.desc,
        url: `${brand.company.site}${pageLanguage}/quote`,
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


