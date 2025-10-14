import { PageHeader } from "@/components/header/PageHeader"
import { contactTeamData } from "@/constants/contactData"
import { InViewWrapper } from "@/hooks/InViewWrapper"
import { Flex, Grid, Separator } from "@radix-ui/themes"
import { TeamItem } from "../TeamItem/TeamItem"

export const TeamBlock = () => {


    return <InViewWrapper direction="top" delay={0.1}>
        {Object.keys(contactTeamData).map((key: string, idx) => {
            const keyData = contactTeamData[key as "Sales"]
            return <Flex key={key} direction={"column"} mb={"9"}>
                <InViewWrapper direction="top" delay={(0.2 * idx)}>
                    <Flex gap={"4"} direction={"column"} mb={"2"}>
                        <PageHeader text={key} size="m" />
                    </Flex>
                </InViewWrapper>

                <Grid columns={{ initial: "1", lg: "2" }} gap={"5"}>
                    <TeamItem keyData={keyData} idx={idx} />
                </Grid>
                <Separator size={"4"} style={{ height: "4px" }} color="green" mt={"4"} />
            </Flex>
        })}
    </InViewWrapper>

}