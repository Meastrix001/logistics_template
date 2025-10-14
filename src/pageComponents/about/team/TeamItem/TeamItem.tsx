"use client"
import { InViewWrapper } from "@/hooks/InViewWrapper"
import { Card, Grid, Box, Flex, AspectRatio, Text } from "@radix-ui/themes"

export const TeamItem = ({ keyData, idx }) => {
    return <>
        {keyData.map((data, i) => {
            return <InViewWrapper key={data.name} direction="top" delay={(0.1 * idx) + (i / 10)}>
                <Card >
                    <Grid columns={"4fr 8fr"} gap={"5"}>
                        <Box>
                            <AspectRatio ratio={10 / 10}> <img style={{ borderRadius: "10px" }} height={"100%"} width={"100%"} src={data.image} alt="" /></AspectRatio>
                        </Box>
                        <Flex gap={"3"} direction={"column"}>
                            <Box>
                                <Text as="p" weight={"bold"}>{data.name}</Text>
                                <Text as="p" color="green">{data.role}</Text>
                            </Box>

                            <Flex direction={"column"}>
                                {data.contacts.map((contact) => {
                                    return <Text key={contact.Value}>{contact.key}: <Text weight={"bold"} className="txt-primary">{contact.Value}</Text></Text>
                                })}
                            </Flex>
                        </Flex>
                    </Grid>
                </Card>
            </InViewWrapper>
        })}
    </>
}