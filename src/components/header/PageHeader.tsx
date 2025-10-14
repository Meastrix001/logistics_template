import { Box, Heading, Separator } from "@radix-ui/themes"

export const PageHeader = ({ size, text }: { size: "s" | "m" | "l", text: string }) => {

    if (size === "s") {
        return <Box width={"fit-content"}>
            <Heading className="txt-italic" as="h3" size={"7"} mb={"2"}>
                {text}
            </Heading>
            <Separator size={"4"} color="green" style={{ height: "4px" }} />
        </Box>
    }

    if (size === "m") {
        return <Box width={"fit-content"}>
            <Heading className="txt-italic" as="h2" size={"8"} mb={"2"}>
                {text}
            </Heading>
            <Separator size={"4"} color="green" style={{ height: "4px" }} />
        </Box>
    }

    if (size === "l") {
        return <Box width={"fit-content"}>
            <Heading className="txt-italic" as="h1" size={{ initial: "8", lg: "9" }} mb={"2"}>
                {text}
            </Heading>
            <Separator size={"4"} color="green" style={{ height: "4px" }} />
        </Box>
    }
}