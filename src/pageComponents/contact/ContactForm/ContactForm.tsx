"use client"
import { Box, Button, Checkbox, Flex, Grid, Heading, TextField } from "@radix-ui/themes"
import { useState } from "react"

export const ContactForm = () => {

    const [contactData, setContactData] = useState<{
        name: string,
        email: string,
        message: string
        consent: boolean
    }>({
        name: "",
        email: "",
        message: "",
        consent: false
    })

    const setNewFormValue = (
        key: string,
        value: string | boolean
    ) => {

        setContactData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    return <Box>
        <Heading as="h3" mb={"3"}>Contact form</Heading>
        <Flex direction={"column"} gap={"4"} mb={"3"}>
            <Grid columns={"2"} gap={"4"}>
                <TextField.Root
                    size={"3"}
                    required
                    placeholder="Your name..."
                    value={contactData.name}
                    onChange={(e) => setNewFormValue("fullname", e.target.value)}
                />

                <TextField.Root
                    size={"3"}
                    required
                    placeholder="email..."
                    value={contactData.email}
                    onChange={(e) => setNewFormValue("email", e.target.value)}
                />
            </Grid>

            <textarea
                className="quote-form__textarea"
                placeholder="Additional Information"
                value={contactData.message}
                onChange={(e) => setNewFormValue("message", e.target.value)}
                style={{ width: "100%", maxWidth: "100%", height: "10vh" }}
            />

        </Flex>

        <Flex align={"center"} gap={"2"} className="quote-form__consent" mb={"4"}>
            <Checkbox
                checked={contactData.consent}
                onCheckedChange={(v) => setNewFormValue("consent", v === true)}

            />{" "}
            I consent to the processing of my data.
        </Flex>
        <Button style={{ width: "100%" }} >Send email</Button>


    </Box>
}