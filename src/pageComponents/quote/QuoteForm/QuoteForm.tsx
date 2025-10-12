"use client";

import {
    Badge,
    Box,
    Button,
    Card,
    Checkbox,
    Flex,
    Grid,
    Text,
    TextField,
} from "@radix-ui/themes";
import { useState } from "react";
import { QuoteFormTypes } from "./QuoteForm.types";
import {
    quoteFormInitData,
    requiredQuoteFormFields,
    transportOptions,
} from "@/constants/quoteFormInitData";

export const QuoteForm = () => {
    const [formData, setFormData] = useState<QuoteFormTypes>(quoteFormInitData);
    const [missingFields, setMissingFields] = useState<(keyof QuoteFormTypes)[]>()



    const checkFields = () => {
        const missingFields = requiredQuoteFormFields.filter(
            // @ts-expect-error expected
            (key) => !formData[key] || formData[key].toString().trim() === "" || formData[key] === false
        );

        if (missingFields.length > 0) {
            return setMissingFields(missingFields);
        }
        setMissingFields([])
    }

    const setNewFormValue = <K extends keyof QuoteFormTypes>(
        key: K,
        value: QuoteFormTypes[K]
    ) => {

        if (missingFields) {
            checkFields()
        }

        setFormData((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    const handleSubmit = () => {
        checkFields()

        if (missingFields?.length !== 0) {
            return
        }

        // ✅ All good
        console.log("Form submitted:", formData);
    };

    return (
        <Card className="shadow-top-right">
            <Box p={"4"}>
                <Flex direction={"column"} gap={"4"} className="quote-form">
                    {/* Row 1 */}
                    <Grid columns={"2"} gap={"4"}>
                        <label>
                            <Text as="label" size="3" weight="bold">
                                Full name *
                            </Text>
                            <TextField.Root
                                size={"3"}
                                required
                                placeholder="Full name..."
                                value={formData.fullname}
                                color={missingFields?.includes("fullname") ? "red" : "amber"}
                                variant={missingFields?.includes("fullname") ? "soft" : "classic"}
                                onChange={(e) => setNewFormValue("fullname", e.target.value)}
                            />
                            {missingFields?.includes("fullname") &&
                                <Text size={"2"} className="txt-italic" color="red">Required</Text>
                            }
                        </label>

                        <label>
                            <Text as="label" size="3" weight="bold">
                                Company name
                            </Text>
                            <TextField.Root
                                size={"3"}
                                placeholder="Company name..."
                                value={formData.company}
                                onChange={(e) => setNewFormValue("company", e.target.value)}
                            />
                        </label>
                    </Grid>

                    {/* Row 2 */}
                    <Grid columns={"2"} gap={"4"}>
                        <label>
                            <Text as="label" size="3" weight="bold">
                                Email address *
                            </Text>
                            <TextField.Root
                                required
                                size={"3"}
                                placeholder="Contact email..."
                                type="email"
                                value={formData.email}
                                onChange={(e) => setNewFormValue("email", e.target.value)}
                                color={missingFields?.includes("email") ? "red" : "amber"}
                                variant={missingFields?.includes("email") ? "soft" : "classic"}
                            />
                            {missingFields?.includes("email") &&
                                <Text size={"2"} className="txt-italic" color="red">Required</Text>
                            }
                        </label>

                        <label>
                            <Text as="label" size="3" weight="bold">
                                Phone number *
                            </Text>
                            <TextField.Root
                                required
                                size={"3"}
                                placeholder="Phone Number"
                                value={formData.phoneNumber}
                                onChange={(e) => setNewFormValue("phoneNumber", e.target.value)}
                                color={missingFields?.includes("phoneNumber") ? "red" : "amber"}
                                variant={missingFields?.includes("phoneNumber") ? "soft" : "classic"}
                            />
                            {missingFields?.includes("phoneNumber") &&
                                <Text size={"2"} className="txt-italic" color="red">Required</Text>
                            }
                        </label>
                    </Grid>

                    {/* Radio buttons */}
                    <Box className="col-span-2">
                        <Text as="label" size="3" weight="bold">
                            Transport type *
                        </Text>

                        <Grid columns={"2"} gap="4">
                            {transportOptions.map((option) => {
                                return (
                                    <Badge
                                        onClick={() =>
                                            setNewFormValue("transportType", option as "domestic")
                                        }
                                        className="cursor"
                                        key={option}
                                        style={{ justifyContent: "center" }}
                                        variant={
                                            formData["transportType"] === option ? "solid" : "soft"
                                        }
                                        size={"3"}
                                    >
                                        <Text align={"center"}>
                                            {option.slice(0, 1).toUpperCase()}
                                            {option.slice(1, option.length)} transport
                                        </Text>
                                    </Badge>
                                );
                            })}
                        </Grid>
                        {missingFields?.includes("transportLoad") &&
                            <Text size={"2"} className="txt-italic" color="red">Required</Text>
                        }                    </Box>

                    {/* Row 4 */}
                    <Grid columns={"2"} gap={"4"}>
                        <label>
                            <Text as="label" size="3" weight="bold">
                                Pickup address *
                            </Text>
                            <TextField.Root
                                required
                                size={"3"}
                                placeholder="Pickup Address"
                                value={formData.pickupAddress}
                                onChange={(e) => setNewFormValue("pickupAddress", e.target.value)}
                                color={missingFields?.includes("pickupAddress") ? "red" : "amber"}
                                variant={missingFields?.includes("pickupAddress") ? "soft" : "classic"}
                            />
                            {missingFields?.includes("pickupAddress") &&
                                <Text size={"2"} className="txt-italic" color="red">Required</Text>
                            }
                        </label>

                        <label>
                            <Text as="label" size="3" weight="bold">
                                Dropoff address *
                            </Text>
                            <TextField.Root
                                required
                                size={"3"}
                                placeholder="Dropoff Address"
                                value={formData.dropOffAddress}
                                onChange={(e) => setNewFormValue("dropOffAddress", e.target.value)}
                                color={missingFields?.includes("dropOffAddress") ? "red" : "amber"}
                                variant={missingFields?.includes("dropOffAddress") ? "soft" : "classic"}
                            />
                            {missingFields?.includes("dropOffAddress") &&
                                <Text size={"2"} className="txt-italic" color="red">Required</Text>
                            }
                        </label>
                    </Grid>

                    {/* Row 5 */}
                    <Box className="col-span-2">
                        <Text as="label" size="3" weight="bold">
                            Transport product *
                        </Text>
                        <TextField.Root
                            required
                            size={"3"}
                            placeholder="Type of Load (e.g. pallets, boxes, etc.)"
                            value={formData.transportLoad}
                            onChange={(e) => setNewFormValue("transportLoad", e.target.value)}
                            color={missingFields?.includes("transportLoad") ? "red" : "amber"}
                            variant={missingFields?.includes("transportLoad") ? "soft" : "classic"}
                        />
                        {missingFields?.includes("transportLoad") &&
                            <Text size={"2"} className="txt-italic" color="red">Required</Text>
                        }
                    </Box>

                    {/* Row 6 */}
                    <Grid columns={"2"} gap={"4"}>
                        <label>
                            <Text as="label" size="3" weight="bold">
                                Pickup date
                            </Text>
                            <TextField.Root
                                size={"3"}
                                placeholder="Pickup Date"
                                type="date"
                                value={formData.pickupDate}
                                onChange={(e) => setNewFormValue("pickupDate", e.target.value)}
                            />
                        </label>

                        <label>
                            <Text as="label" size="3" weight="bold">
                                Delivery date
                            </Text>
                            <TextField.Root
                                required
                                size={"3"}
                                placeholder="Dropoff Date"
                                type="date"
                                value={formData.dropOffDate}
                                onChange={(e) => setNewFormValue("dropOffDate", e.target.value)}
                            />
                        </label>
                    </Grid>

                    {/* Row 7 */}
                    <Box className="col-span-2">
                        <Text as="label" size="3" weight="bold">
                            Additional information
                        </Text>
                        <textarea
                            className="quote-form__textarea"
                            placeholder="Additional Information"
                            value={formData.additional}
                            onChange={(e) => setNewFormValue("additional", e.target.value)}
                            style={{ width: "100%", maxWidth: "100%", height: "10vh" }}
                        />
                    </Box>

                    {/* Row 8 */}
                    <Flex direction={"column"} className="col-span-2">
                        <Flex align={"center"} gap={"2"} className="quote-form__consent">
                            <Checkbox
                                checked={formData.consent}
                                onCheckedChange={(v) => setNewFormValue("consent", v === true)}

                            />{" "}
                            I consent to the processing of my data.
                        </Flex>
                        {missingFields?.includes("consent") &&
                            <Text size={"2"} className="txt-italic" color="red">Required</Text>
                        }
                    </Flex>
                </Flex>
            </Box>


            <Button className="cursor" size={"2"} style={{ width: "100%" }} onClick={() => handleSubmit()}>
                Submit
            </Button>
        </Card>
    );
};
