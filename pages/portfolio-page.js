import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'



function Portfolio() {

    const [isAnimating, setIsAnimating] = useState(false);

    return (
        <Layout title='Portfolio' className="p-0 box-border">
            <motion.div
                className='w-48 h-48 bg-green-400 flex flex-col items-center justify-center mr-auto ml-20'
                animate={{
                    x: isAnimating ? 900 : 0,
                    opacity: isAnimating ? 1 : 0.5,
                    rotate: isAnimating ? 270 : 0,
                }}
                initial={{
                    opacity: 0,
                }}
                transition={{
                    type: "spring",
                    stifiness: 500,
                }}
                onClick={() => setIsAnimating(!isAnimating)}
            >
            </motion.div>
        </Layout>
    );
}

export default Portfolio;