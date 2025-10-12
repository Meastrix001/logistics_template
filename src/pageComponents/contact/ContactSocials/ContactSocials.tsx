import { contactData, contactSocials } from "@/constants/contactData"
import { Box, Flex, Grid, Heading, Text } from "@radix-ui/themes"

export const ContactSocials = () => {

    return <Box>
        <Heading as="h3" mb={"3"}>Find us here</Heading>

        <Grid columns={"2"} rows={"2"}>
            {contactData.map((item) => {
                return <Flex key={""} direction={"column"} gap={"3"}>
                    <Text>{item.title}</Text>
                    <Text>{item.value}</Text>
                </Flex>
            })}

            <Flex key={""} direction={"column"} gap={"3"}>
                <Text>Social Media</Text>
                <Flex gap={"3"}>{contactSocials.map((item) => {
                    return <Box key={item.link} className="cursor">{item.icon}</Box>
                })}</Flex>
            </Flex>
        </Grid>
    </Box>
}