import { QuoteFormTypes } from './../pageComponents/quote/QuoteForm/QuoteForm.types';
export const quoteFormInitData = {
    fullname: "",
    company: "",
    email: "",
    phoneNumber: "",
    pickupAddress: "",
    dropOffAddress: "",
    pickupDate: "",
    dropOffDate: "",

    transportLoad: "",
    additional: "",
    consent: false,
} as QuoteFormTypes

export const transportOptions = ["domestic", "international"]




// Define which keys are required
export const requiredQuoteFormFields: (keyof QuoteFormTypes)[] = [
    "fullname",
    "email",
    "phoneNumber",
    "pickupAddress",
    "dropOffAddress",
    "transportLoad",
    "dropOffDate",
    "consent"
];
