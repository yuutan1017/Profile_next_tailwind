// import React, { useState } from 'react'
// import { motion } from 'framer-motion'

// import Layout from '../components/Layout'


//回転しながら移動する箱
// function Portfolio() {

//     const [isAnimating, setIsAnimating] = useState(false);

//     return (
//         <Layout title='Portfolio' className="p-0 box-border">
//             <motion.div
//                 className='w-48 h-48 bg-green-400 flex flex-col items-center justify-center mr-auto ml-20'
//                 animate={{
//                     x: isAnimating ? 900 : 0,
//                     opacity: isAnimating ? 1 : 0.5,
//                     rotate: isAnimating ? 270 : 0,
//                 }}
//                 initial={{
//                     opacity: 0,
//                 }}
//                 transition={{
//                     type: "spring",
//                     stifiness: 500,
//                 }}
//                 onClick={() => setIsAnimating(!isAnimating)}
//             >
//             </motion.div>
//         </Layout>
//     );
// }


// ドラッグ、タップ等々
{/* <motion.div
className='w-48 h-48 bg-green-400 flex flex-col items-center justify-center mr-auto ml-20'
whileHover={{
    scale: 1.1
}}
whileTap={{
    scale: 0.9
}}
drag
dragConstraints={{
    right: 20,
    left: -20,
    top: 5,
    bottom: 5
}}
>
</motion.div> */}

// export default Portfolio;


//時間差で子要素を表示
// function Portfolio() {

//     const boxVariant = {
//         hidden: {
//             x: "-100vh",
//         },
//         visible: {
//             x : 0,
//             transition: {
//                 delay: 0.5,
//                 when: "beforeChildren",
//                 staggerChildren: 0.2
//             },
//         },
//     }

//     const listVariant = {
//         hidden: {
//             x: -10,
//             opacity: 0,
//         },
//         visible: {
//             x : 0,
//             opacity: 1,
//         },
//     }

//     return (
//         <Layout title='Portfolio' className="p-0 box-border">
//             <motion.div
//                 className='w-48 h-48 bg-green-400 flex flex-col items-center justify-center mr-auto ml-20'
//                 variants={boxVariant}
//                 animate="visible"
//                 initial="hidden"
//             >
//                 {[1,2,3].map(box => {
//                     return (
//                     <motion.li 
//                         className="w-1 h-1 bg-white p-3 m-2 list-none"
//                         variants={listVariant}
//                     ></motion.li>
//                 )})}
//             </motion.div>
//         </Layout>
//     );
// }
