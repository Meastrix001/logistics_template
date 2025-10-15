"use client"
import { PageHeader } from "@/components/header/PageHeader";
import { JobPosting, jobsMockData } from "@/constants/jobsData";
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { useLanguageStore } from "@/store/appStore";
import { ArrowLeftIcon, SewingPinFilledIcon, TriangleRightIcon } from "@radix-ui/react-icons";
import { Box, Button, Card, Container, Flex, Grid, Heading, Section, Text } from "@radix-ui/themes";
import Link from "next/link";
import { useParams } from "next/navigation";


export const SingleJobsPage = () => {
    const { slug } = useParams(); // { lang: 'en', slug: '1' }
    const { language } = useLanguageStore()

    if (!slug) {
        return
    }

    const data = jobsMockData[slug as string] as JobPosting

    if (!data) {
        return
    }

    const jobKeys = ["responsibilities", "requirements", "benefits"]

    return (
        <Container className="nav-correct" px={{ initial: "6", lg: "0" }}>
            <Link href={`/${language}/jobs`}  >
                <Button className="cursor"><Flex align={"center"} gap={"2"}><ArrowLeftIcon width={20} height={20} /><Text size={"3"}>Back to jobs</Text></Flex></Button>
            </Link>

            <Grid >
                <Flex direction={"column"}>
                    <InViewWrapper direction="top">
                        <Flex gap={"4"} direction={"column"} >
                            <PageHeader text={data.jobTitle} size="l" />
                            <Flex align={"center"}><SewingPinFilledIcon width={24} height={24} /><Text as="p" size={"5"} weight={"bold"}>{data.locations.join(", ")}</Text></Flex>
                        </Flex>
                    </InViewWrapper>
                </Flex>
            </Grid>

            <Section>
                <Flex direction={"column"} gap={"5"}>
                    <InViewWrapper key={""} direction="top" delay={0.1}>
                        <Card>
                            <Flex align={"center"}><SewingPinFilledIcon width={24} height={24} /><Text as="p" size={"5"} weight={"bold"}>{data.employmentType}</Text></Flex>
                            <Flex align={"center"}><SewingPinFilledIcon width={24} height={24} /><Text as="p" size={"5"} weight={"bold"}>{data.contractType.join(", ")}</Text></Flex>
                        </Card>
                    </InViewWrapper>
                    {jobKeys.map((key: string, idx) => {
                        // @ts-expect-error expected
                        const array = data[key] as string[]

                        return <InViewWrapper key={""} direction="top" delay={(0.1 + idx + 1) / 10}>
                            <Card >
                                <Box p={"5"}>
                                    <Heading mb={"2"} as="h3">{key.slice(0, 1).toUpperCase()}{key.slice(1, key.length)}</Heading>

                                    <Flex direction={"column"} gap={"1"}>
                                        {array.map((item: string) => {
                                            return <Flex align={"center"} gap={"1"} key={""}><TriangleRightIcon /> {item}</Flex>
                                        })}
                                    </Flex>
                                </Box>
                            </Card>
                        </InViewWrapper>
                    })}
                </Flex>
            </Section>
        </Container>
    );
}
