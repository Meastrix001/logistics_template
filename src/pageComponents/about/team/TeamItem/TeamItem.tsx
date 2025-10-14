"use client"
import { ContactItem, ContactKeyValue } from "@/constants/contactData"
import { InViewWrapper } from "@/hooks/InViewWrapper"
import { Card, Grid, Box, Flex, AspectRatio, Text } from "@radix-ui/themes"

export const TeamItem = ({ keyData, idx }: { keyData: ContactItem[], idx: number }) => {
    return <>
        {keyData.map((data, i) => {
            return <InViewWrapper key={data.name} direction="top" delay={(0.1 * idx) + (i / 10)}>
                <Card >
                    <Grid columns={{ initial: "1", lg: "4fr 8fr" }} gap={"5"}>
                        <Box height={{ initial: "50%", lg: "100%" }}>
                            <AspectRatio ratio={1 / 1}> <img style={{ borderRadius: "10px" }} height={"100%"} width={"100%"} src={data.image} alt="" /></AspectRatio>
                        </Box>

                        <Flex gap={"3"} direction={"column"}>
                            <Box>
                                <Text as="p" weight={"bold"}>{data.name}</Text>
                                <Text as="p" color="green">{data.role}</Text>
                            </Box>

                            <Flex direction={"column"}>
                                {data.contacts.map((contact: ContactKeyValue) => {
                                    return <Text key={contact.value}>{contact.key}: <Text weight={"bold"} className="txt-primary">{contact.value}</Text></Text>
                                })}
                            </Flex>
                        </Flex>
                    </Grid>
                </Card>
            </InViewWrapper>
        })}
    </>
}