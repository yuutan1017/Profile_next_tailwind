import React, {useState} from 'react';
import ProgressBar from 'react-customizable-progressbar';

import Layout from '../components/Layout';

export default function Skills() {

    const [progress, setProgress] = useState(10);

    return (
        <Layout>
            <div className='flex flex-wrap justify-center'>
                <ProgressBar
                    radius={100}
                    progress={progress}
                    strokeWidth={18}
                    strokeColor="blue"
                    strokeLinecap="square"
                    trackStrokeWidth={18} 
                >
                    <div className='flex align-center justify-center absolute top-0 w-full h-full font-thin text-4xl select-none'>
                        <div>{progress}%</div>
                    </div>
                </ProgressBar>
            </div>
        </Layout>
    );

}
