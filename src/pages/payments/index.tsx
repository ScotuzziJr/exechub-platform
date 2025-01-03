import { Button } from '@chakra-ui/react';
import React from 'react';
import { createCheckoutSession, createStripeCustomer } from './stripe';



const PaymentPage: React.FC = () => {
    return (
            <>
                <Button onClick={async () => {
                console.log('clicked')
            console.log(import.meta.env.VITE_TESTE as string)
            
                let response = await createStripeCustomer({
                    name: "Wellington Bezerra",
                    email: ""
                })
            
            }}>Criar usuário  stripe assinatura</Button>
            <Button onClick={async () => {
                console.log('clicked')
                console.log(import.meta.env.VITE_TESTE as string)

                let response = await createCheckoutSession("weweweweew", "wellingtons.bezerra@hotmail.com")

                if (!response.url) return;

                window.location.replace(response.url);
            }}>Assinar Plano</Button>

            </>
            
        
        
    );
};

export default PaymentPage;