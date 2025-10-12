import ReviewPage from "@/pages/review/page";
import { brand } from "@/theme/brand.config";
import { LanguageKeys } from "@/utils/i18n/LanguageKeys";
import { Metadata } from "next";

const pageLanguage = "en"


export default function ReviewPageEn() {
    return <ReviewPage lang={pageLanguage} />
}

export const metadata: Metadata = {
    alternates: {
        canonical: `${brand.company.site}${pageLanguage}/review`,
        languages: {
            en: `${brand.company.site}en/review`,
            et: `${brand.company.site}et/review`,
        },
    },
    title: LanguageKeys[pageLanguage].SEO.review.title,
    description: LanguageKeys[pageLanguage].SEO.review.desc,
    openGraph: {
        title: LanguageKeys[pageLanguage].SEO.review.title,
        description: LanguageKeys[pageLanguage].SEO.review.desc,
        url: `${brand.company.site}${pageLanguage}/review`,
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


