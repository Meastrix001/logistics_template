"use client"
import { JobPosting } from "@/constants/jobsData";
import { useLanguageStore } from "@/store/appStore";
import { Button, Card, Flex, Text } from "@radix-ui/themes";
import Link from "next/link";


export const JobsOverviewListItem = ({ job, slug }: { job: JobPosting, slug: string }) => {
    const { language } = useLanguageStore()

    return (
        <Card>
            <Flex direction={"column"} gap={"2"}>
                <Text as="p" weight={"bold"}>{job.jobTitle}</Text>
                <Text as="p">{job.locations.join(", ")}</Text>
                <Link href={`/${language}/jobs/${slug}`} >
                    <Button size={"2"} variant={"solid"} color={"green"} className="cursor" >
                        More info
                    </Button>
                </Link>

            </Flex>
        </Card>
    );
}
