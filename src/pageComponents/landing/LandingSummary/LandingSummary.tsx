

import { PageHeader } from "@/components/header/PageHeader";
import { InViewWrapper } from "@/hooks/InViewWrapper";
import { Flex, Grid, Text } from "@radix-ui/themes";

export const LandingSummary = () => {
    return (
        <Grid columns={{ initial: "1", lg: "8fr 4fr" }} gap={"9"}>
            <InViewWrapper direction="left" delay={0.3}>
                <Flex gap={"4"} direction={"column"}>

                    <PageHeader size="l" text="Company name" />


                    <Flex direction={"column"} gap={"4"}>
                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
                            tempore ipsam praesentium odio consectetur neque et voluptate incidunt
                            eius doloremque consequatur rerum aliquam voluptatem reiciendis
                            reprehenderit molestias autem dolor fuga.
                        </Text>

                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
                            tempore ipsam praesentium odio consectetur neque et voluptate incidunt
                            eius doloremque consequatur rerum aliquam voluptatem reiciendis
                            reprehenderit molestias autem dolor fuga.
                        </Text>

                        <Text>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
                            tempore ipsam praesentium odio consectetur neque et voluptate incidunt
                            eius doloremque consequatur rerum aliquam voluptatem reiciendis
                            reprehenderit molestias autem dolor fuga.
                        </Text>

                    </Flex>

                </Flex>

            </InViewWrapper>


            <InViewWrapper direction="right" delay={0.3}>
                <img
                    src="static/landing/logo_landing.jpg"
                    alt="A house in a forest"
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                        borderRadius: "var(--radius-2)",
                    }}
                />
            </InViewWrapper>

        </Grid>
    );
};
