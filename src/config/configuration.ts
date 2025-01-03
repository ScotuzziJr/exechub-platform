
export const config = {
    stripe: {
        stripePublicKey: import.meta.env.VITE_STRIPE_PUBLIC_KEY as string,
        stripeSecretKey: import.meta.env.VITE_STRIPE_SECRET_KEY as string,
        stripeRedutoProductPriceAvulso: "price_1Qcyl003RPBQjdXjegKESZrm",
        stripeRedutoProductPriceSubscribe: "price_1Qcyl003RPBQjdXjegKESZrm"
    }
}