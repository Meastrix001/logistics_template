"use client"
import { useLanguageStore } from "@/store/appStore";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

export const LandingQuoteCTAButtons = () => {
    const { language } = useLanguageStore()
    return (
        <>
            <Link href={`/${language}/quote`} >
                <Button className="cursor" size={{ initial: "2", md: "3" }} variant="solid">
                    <Flex align={"center"} gap={"2"}>
                        Request Quote
                        <ArrowRightIcon />
                    </Flex>
                </Button>
            </Link>

            <Button size={{ initial: "2", md: "3" }} variant="solid">
                <Flex align={"center"} gap={"2"}>
                    More info
                    <ArrowRightIcon />
                </Flex>
            </Button>
        </>
    );
};
