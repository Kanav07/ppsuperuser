import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Flipper, Flipped } from 'react-flip-toolkit';
// import './index.css'; // Don't forget to create a CSS file for styling

const Flip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <Flipper flipKey={isFlipped}>
            <div className="flip-box" onClick={handleFlip}>
                <AnimatePresence>
                    {isFlipped ? (
                        <Flipped flipId="flip-back">
                            <motion.div
                                key="flip-back"
                                className="flip-back"
                                initial={{ opacity: 0, rotateY: 180 }}
                                animate={{ opacity: 1, rotateY: 0 }}
                                exit={{ opacity: 0, rotateY: 180 }}
                            >
                                <p>This is the back of the box!</p>
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
                <span role="img" aria-label="icon">
                  👤
                </span>
                            </motion.div>
                        </Flipped>
                    )}
                </AnimatePresence>
            </div>
        </Flipper>
    );
};

export default Flip;
