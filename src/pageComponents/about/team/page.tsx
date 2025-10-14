import { PageHeader } from "@/components/header/PageHeader";
import { Container, Flex, Text } from "@radix-ui/themes";

import { InViewWrapper } from "@/hooks/InViewWrapper";
import { brand } from "@/theme/brand.config";
import { TeamBlock } from "./TeamBlock/TeamBlock";

export default function AboutTeam() {
    return (
        <Container className="nav-correct" px={{ initial: "6", lg: "0" }}>
            <InViewWrapper direction="top">
                <Flex gap={"4"} direction={"column"} mb={"6"} >
                    <PageHeader text="The Team" size="l" />
                    <Text>Meet our team behind <Text weight={"bold"}>{brand.company.name}</Text>.</Text>
                </Flex>
            </InViewWrapper>

            <Flex direction={"column"}>
                <TeamBlock />
            </Flex>
        </Container>
    );
}
