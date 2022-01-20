import React, { useState } from 'react'
import { motion } from 'framer-motion'

import Layout from '../components/Layout'

function Portfolio() {

    const boxVariant = {
        hidden: {
            x: "-100vh",
        },
        visible: {
            x : 0,
            transition: {
                delay: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.2
            },
        },
    }

    const listVariant = {
        hidden: {
            x: -10,
            opacity: 0,
        },
        visible: {
            x : 0,
            opacity: 1,
        },
    }

    return (
        <Layout title='Portfolio' className="p-0 box-border">
            <motion.div
                className='w-48 h-48 bg-green-400 flex flex-col items-center justify-center mr-auto ml-20'
                variants={boxVariant}
                animate="visible"
                initial="hidden"
            >
                {[1,2,3].map(box => {
                    return (
                    <motion.li 
                        className="w-1 h-1 bg-white p-3 m-2 list-none"
                        variants={listVariant}
                    ></motion.li>
                )})}
            </motion.div>
        </Layout>
    );
}

export default Portfolio;