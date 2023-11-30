import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { authContext } from '../../Authprovider/Authprovider';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const Checkoutform = () => {
    const [clientSecret, setclientsecret] = useState('')
    const [transactionId, settransactionId] = useState('')
    const [errors, setError] = useState('')
    const price = 250
    const axiosSecure = useAxiosSecure()

    // const totalPrice = data.reduce((Total, item) => Total + parseInt(item.price), 0);
    // console.log("total price", totalPrice);
    // console.log('payent data', data);
    const { user } = useContext(authContext)
    const email = user?.email
    console.log("users email", email);

    const stripe = useStripe()
    const elements = useElements()

    useEffect(() => {
        // fetch("https://survey-world-server.vercel.app/create-payment-intent", {
        //     method: "POST",
        //     headers: {
        //         "content-type": "application/json"
        //     },
        //     body: JSON.stringify({ price: price })
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log("client side payment secetr", data.clientSecret)
        //         setclientsecret(data.clientSecret)
        //     })
        axiosSecure.post("/create-payment-intent", { price: price })
            .then(res => {
                console.log(res.data.clientSecret);
                setclientsecret(res.data.clientSecret)
            })


    }, [price, axiosSecure])



    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }


        const card = elements.getElement(CardElement)
        if (card == null) {
            return;
        }
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card,
        })
        if (error) {
            console.log('[error]', error);
            setError(error)
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setError("")
        }
        // confirm payment
        const { paymentIntent, error: payenterorr } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || "unknown",
                    name: user?.displayName || "unknown"
                }
            }
        })
        if (payenterorr) {
            console.log('[payenterorr]', payenterorr);
            // setError(error)
        } else {
            console.log('[paymentIntent]', paymentIntent);
            if (paymentIntent.status === "succeeded") {
                console.log("transaction id ", paymentIntent.id);
                settransactionId(paymentIntent.id)

                const paymentUser = {
                    email: user?.email,
                    name: user?.displayName,
                    price: price,
                    transactionId: paymentIntent.id,
                    date: new Date()
                }
                const res = await axiosSecure.post(`/v1/paymentHistory/${email}`, paymentUser)
                console.log("inside payent", res);
                // if (res) {
                //     const makepro = { role: "pro" }
                //    const res = await axiosSecure.patch(`/v2/usersRole/${email}`, makepro)
                //    console.log(res);
                // }
            }
            // setError("")
        }


    }
    return (
        <div>
            <h1 className='text-2xl font-bold my-6 text-center'> pay: {price} </h1>
            <form onSubmit={handleSubmit} >
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: 'white',
                                '::placeholder': {
                                    color: 'yellow',
                                },
                            },
                            invalid: {
                                color: 'red',
                            },
                        },
                    }}
                />
                <button className='btn  btn-primary my-5 ' type="submit" disabled={!stripe || !clientSecret}>
                    pay
                </button>
                <p className='text-red-500'> {errors}</p>
                {transactionId && <p className='text-green-400 font-bold text-2xl'> transactionId : {transactionId} </p>}
            </form>

        </div>
    );
};

export default Checkoutform;