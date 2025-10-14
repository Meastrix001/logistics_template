import { InViewWrapper } from "@/hooks/InViewWrapper"
import { Badge, Box, Callout, Flex, Separator, Text } from "@radix-ui/themes"

export const AboutLegend = () => {

    const aboutItems = [
        {
            date: "2014",
            texts: [
                "Start of freight-forwarding operations in 2014",
            ]
        },
        {
            date: "2016",
            texts: [
                "Transforming the company into TB Logistics sp. z o.o. limited partnership.",
                "Opening the company office in Łańcut, which at that point served as the headquarters.",
                "ISO 28000 certification"
            ]
        },
        {
            date: "2018",
            texts: [
                "Moving the corporate headquarters to a new office in Rzeszów at Kwiatkowskiego Street.",
                "First 7.5t lorry",
                "TCE Elite Express certification"
            ]
        },

        {
            date: "2019",
            texts: [
                "Opening a branch in Lublin",
                "Purchasing an 18t vehicle",
                "TCC Elite Carier and TCF Elite Forwarder certification"
            ]
        },
        {
            date: "2021",
            texts: [
                "Opening a branch in Kraków",
                "Opening our first foreign branch in Brno"
            ]
        },
    ]

    return <Flex>
        <Flex direction={"column"} gap={"5"}>{aboutItems.map((item, idx) => {
            return <InViewWrapper key={""} direction="bottom" delay={(0.25 * idx)}>
                <Box key={""}>
                    <Badge size={"3"} mb={"2"}>{item.date}</Badge>
                    <Flex direction={"column"} gap={"2"}>
                        {item.texts.map((txt, i) => {
                            return <InViewWrapper key={""} direction="bottom" delay={(0.25 * idx) + (0.20 * i)}>
                                <Callout.Root size={"1"} color="gray" key={""}>
                                    <Callout.Text>
                                        <Text key={""} className="txt-primary">{txt}</Text>
                                    </Callout.Text>
                                </Callout.Root>
                            </InViewWrapper>
                        })}
                        <Separator color="green" size={"4"} style={{ height: "4px" }} />
                    </Flex>
                </Box>
            </InViewWrapper>
        })}</Flex>
    </Flex>
}