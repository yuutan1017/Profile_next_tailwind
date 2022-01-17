import React from 'react'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'

const Portfolio = () => {
    return (
        <Layout title='Portfolio' className="p-0 box-border">
            <motion.div 
                className='w-48 h-48 bg-green-400 flex flex-col items-center justify-center mr-auto ml-20'
                animate={{
                    x: "50rem",
                    opacity: 1,
                }}
                initial={{
                    opacity: 0.1,
                }}
                transition={{
                    type: "spring",
                    stifiness: 500,
                }}
            >
            </motion.div>
        </Layout>
    )
}

export default Portfolio;