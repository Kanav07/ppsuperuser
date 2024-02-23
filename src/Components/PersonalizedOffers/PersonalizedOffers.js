// Import necessary React components and styles if needed

import React, { useState, useEffect } from 'react';
import './app.css'


import Bank from "./bank.json";
import Insurance from "../../Assets/animations/insurance.json";
import Stocks from "./stocks.json";
import Button from '@mui/material/Button';

import PayPayLogo from '../../Assets/images/paypay-logo.jpg'
import Lottie from 'lottie-react';




const Card = (props) => (
    <div className="card">
        {/* {props.otherChildren} */}
        <img src={props.imgUrl}
            alt={props.alt || 'Image'} />
        <div className="card-content">
            <div className='card-title'>{props.title}</div>
            <p className='card-content-p'>{props.content}</p>
            <hr />


        </div>
        <div className='card-action'>
            <Button size="small" style={{ float: 'left' }}>Avail Now</Button>
            <Button size="small" style={{ float: 'right' }}>Learn More</Button>
        </div>

    </div>
);

const CardContainer = (props) => (
    <div className="cards-container">
        {
            props.cards.map((card) => (
                <Card
                    imgUrl={PayPayLogo}
                    title={card.title}
                    content={card.content}
                // otherChildren={<Lottie animationData={card.animationIcon}></Lottie>}
                // buttonText1="Avail Now"
                // buttonText2="Learn More" 
                />


            ))
        }
    </div>
);

const PersonalizedOffers = () => {

    const [userOffers, setUserOffers] = useState([
        { id: 1, description: 'Grab an extra 3 months of insurance on your next yearly car coverage' },
        { id: 2, description: 'Invest ₹100,000 or more in securities and enjoy a ₹2,000 boost from us' },
        { id: 3, description: 'Get ₹50 cashback on PayPay bank transaction of ₹10,000 or more' },
        { id: 4, description: 'Exclusive 20% off on your next vehicle insurance' }

    ]);

    const offers = [
        { id: 1, title: 'Extra Coverage', content: 'Grab an extra 3 months of insurance on your next yearly car coverage', imgUrl: { PayPayLogo }, animationIcon: { Insurance } },
        { id: 2, title: 'Securities', content: 'Invest ₹100,000 or more in securities and enjoy a ₹2,000 boost from us', imgUrl: { PayPayLogo }, animationIcon: { Stocks } },
        { id: 3, title: 'Bank Offer', content: 'Get ₹50 cashback on PayPay bank transaction of ₹10,000 or more', imgUrl: { PayPayLogo }, animationIcon: { Bank } },
        { id: 4, title: 'Fee waiver', content: 'Exclusive 20% off on your next vehicle insurance', imgUrl: { PayPayLogo }, animationIcon: { Insurance } },
    ]


    useEffect(() => {

    }, []);
    const [isFlipped1, setIsFlipped1] = useState(false);
    const [isFlipped2, setIsFlipped2] = useState(false);
    const [isFlipped3, setIsFlipped3] = useState(false);

    const handleFlip1 = () => {
        setIsFlipped1(!isFlipped1);
    };

    const handleFlip2 = () => {
        setIsFlipped2(!isFlipped2);
    };

    const handleFlip3 = () => {
        setIsFlipped3(!isFlipped3);
    };

    const recipes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    const reduceRecipes = (acc, cur, index) => {
        const groupIndex = Math.floor(index / 3);
        if (!acc[groupIndex]) acc[groupIndex] = [];
        acc[groupIndex].push(cur);
        console.log(acc);
        return acc;
    };




    return (
        <div>

            <div className="PersonalizedOffersTextDiv">
                <p><b>Exclusive Offers For You</b></p>
            </div>
            <div className="PersonalizedOffersContainer">
                {/* <Carousel activeIndex={0}>

                    <Carousel.Item style={{display: 'flex'}} key={0}>
                        <MediaCard
                            image="/path/to/your/image.jpg"
                            title="Extra Coverage 1"
                            description="Grab an extra 3 months of insurance on your next yearly car coverage"
                            buttonText1="Avail Now"
                            buttonText2="Learn More"
                        />
                         <MediaCard
                            image="/path/to/your/image.jpg"
                            title="Extra Coverage 2"
                            description="Grab an extra 3 months of insurance on your next yearly car coverage"
                            buttonText1="Avail Now"
                            buttonText2="Learn More"
                        />
                        <MediaCard
                            image="/path/to/your/image.jpg"
                            title="Extra Coverage 3"
                            description="Grab an extra 3 months of insurance on your next yearly car coverage"
                            buttonText1="Avail Now"
                            buttonText2="Learn More"
                        />
                    </Carousel.Item>
                    <Carousel.Item style={{display: 'flex'}} key={1}>
                        <MediaCard
                            image="/path/to/your/image.jpg"
                            title="Extra Coverage 4"
                            description="Grab an extra 3 months of insurance on your next yearly car coverage"
                            buttonText1="Avail Now"
                            buttonText2="Learn More"
                        />
                        <MediaCard
                            image="/path/to/your/image.jpg"
                            title="Extra Coverage 5"
                            description="Grab an extra 3 months of insurance on your next yearly car coverage"
                            buttonText1="Avail Now"
                            buttonText2="Learn More"
                        />
                        <MediaCard
                            image="/path/to/your/image.jpg"
                            title="Extra Coverage 6"
                            description="Grab an extra 3 months of insurance on your next yearly car coverage"
                            buttonText1="Avail Now"
                            buttonText2="Learn More"
                        />
                    </Carousel.Item>


                </Carousel> */}

                <CardContainer cards={offers} />

                {/* <Flipper flipKey={isFlipped3}>
                    <div className="flip-box" onClick={handleFlip3}>
                        <AnimatePresence>
                            {isFlipped3 ? (
                                <Flipped flipId="flip-back">
                                    <motion.div
                                        key="flip-back"
                                        className="flip-back"
                                        initial={{ opacity: 0, rotateY: 180 }}
                                        animate={{ opacity: 1, rotateY: 0 }}
                                        exit={{ opacity: 0, rotateY: 180 }}
                                    >
                                        <p>Get ₹50 cashback on PayPay bank transaction of ₹10,000 or more</p>
                                    </motion.div>
                                </Flipped>
                            ) : (
                                <Flipped flipId="flip-front">
                                    <motion.div
                                        key="flip-front"
                                        className="flip-front"
                                        initial={{ opacity: 1, rotateY: 0 }}
                                        animate={{ opacity: 1, rotateY: 0 }}
                                        exit={{ opacity: 0, rotateY: -180 }}
                                    >
                                        
                                        <Lottie animationData={Bank} loop={true} />
                                    </motion.div>
                                </Flipped>
                            )}
                        </AnimatePresence>
                    </div>
                </Flipper> */}
                {/* <Flipper flipKey={isFlipped1}>
                    <div className="flip-box" onClick={handleFlip1}>
                        <AnimatePresence>
                            {isFlipped1 ? (
                                <Flipped flipId="flip-back">
                                    <motion.div
                                        key="flip-back"
                                        className="flip-back"
                                        initial={{ opacity: 0, rotateY: 180 }}
                                        animate={{ opacity: 1, rotateY: 0 }}
                                        exit={{ opacity: 0, rotateY: 180 }}
                                    >
                                        <p>Grab an extra 3 months of insurance on your next yearly car coverage</p>
                                    </motion.div>
                                </Flipped>
                            ) : (
                                <Flipped flipId="flip-front">
                                    <motion.div
                                        key="flip-front"
                                        className="flip-front"
                                        initial={{ opacity: 1, rotateY: 0 }}
                                        animate={{ opacity: 1, rotateY: 0 }}
                                        exit={{ opacity: 0, rotateY: -180 }}
                                    >
                                        <Lottie animationData={Insurance} loop={true} />
                                    </motion.div>
                                </Flipped>
                            )}
                        </AnimatePresence>
                    </div>
                </Flipper> */}
                {/* <Flipper flipKey={isFlipped2}>
                    <div className="flip-box" onClick={handleFlip2}>
                        <AnimatePresence>
                            {isFlipped2 ? (
                                <Flipped flipId="flip-back">
                                    <motion.div
                                        key="flip-back"
                                        className="flip-back"
                                        initial={{ opacity: 0, rotateY: 180 }}
                                        animate={{ opacity: 1, rotateY: 0 }}
                                        exit={{ opacity: 0, rotateY: 180 }}
                                    >
                                        <p>Invest ₹100,000 or more in securities and enjoy a ₹2,000 boost from us</p>
                                    </motion.div>
                                </Flipped>
                            ) : (
                                <Flipped flipId="flip-front">
                                    <motion.div
                                        key="flip-front"
                                        className="flip-front"
                                        initial={{ opacity: 1, rotateY: 0 }}
                                        animate={{ opacity: 1, rotateY: 0 }}
                                        exit={{ opacity: 0, rotateY: -180 }}
                                    >
                                        
                                        <Lottie animationData={Stocks} loop={true} />
                                    </motion.div>
                                </Flipped>
                            )}
                        </AnimatePresence>
                    </div>
                </Flipper> */}
            </div>
            <div className="breaker"></div>
        </div>

    );
};

export default PersonalizedOffers;
