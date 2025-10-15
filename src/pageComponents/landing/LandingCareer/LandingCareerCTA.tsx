"use client"
import { useLanguageStore } from "@/store/appStore"
import { ArrowRightIcon } from "@radix-ui/react-icons"
import { Button, Flex, Link } from "@radix-ui/themes"

export const LandingCareerCTA = () => {
    const { language } = useLanguageStore()
    return <Link href={`/${language}/jobs`} >
        <Button size={"3"} className="cursor">
            <Flex gap={"2"} align={"center"}>
                Find jobs
                <ArrowRightIcon width={20} height={20} />
            </Flex>
        </Button>
    </Link>

}