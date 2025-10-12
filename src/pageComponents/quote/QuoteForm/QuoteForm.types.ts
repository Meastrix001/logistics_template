export type QuoteFormTypes = {
    fullname?: string,
    company: string,
    email: string,
    phoneNumber: string,
    transportType: "domestic" | "international",
    pickupAddress: string,
    dropOffAddress: string,
    transportLoad: string,
    pickupDate: string,
    dropOffDate: string,
    additional: string,
    consent: boolean,
}
