import { PageHeader } from "@/components/header/PageHeader";
import { jobsMockData } from "@/constants/jobsData";
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { JobsOverviewListItem } from "../JobsOverviewListItem/JobsOverviewListItem";


export const JobsOverviewList = () => {
    return (
        <Box>
            <InViewWrapper direction="top" delay={0.15}>
                <Flex gap={"4"} direction={"column"} mb={"6"}>
                    <PageHeader text="Career oppertunities" size="m" />
                </Flex>
            </InViewWrapper>

            <Box>
                <InViewWrapper direction="top" delay={0.2}>
                    <Grid columns={"2"} gap={"4"}>
                        {Object.entries(jobsMockData).map(([slug, job]) => {
                            return <JobsOverviewListItem key={slug} job={job} slug={slug} />
                        })}
                    </Grid>
                </InViewWrapper>
            </Box>
        </Box>
    );
}
