import React from "react";
import { motion } from "framer-motion";


export default function HomePage() {
    return (
    <motion.h1
        title="HomePage"
        className="text-center text-5xl font-sans my-3"
        animate={{ 
            x: [0, 100, 0]
        }}
        transition={{
            duration: 2,
            times: [0, 0.2, 1]
        }}
    >
        Thanks for visiting!!
    </motion.h1>
    );
}
