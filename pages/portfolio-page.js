import React from "react";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";


const Portfolio = () => {
    return (
        <Layout title="Portfolio">
            <motion.div>
                <motion.h5>subtitle</motion.h5>
                <motion.h2>title</motion.h2>
            </motion.div>

            <AnimatePresence>
                <motion.div>
                <motion.h5>subtitle</motion.h5>
                <motion.h2>title</motion.h2>
                <motion.button>button</motion.button>
                </motion.div>
            </AnimatePresence>
        </Layout>
    )
}

export default Portfolio;