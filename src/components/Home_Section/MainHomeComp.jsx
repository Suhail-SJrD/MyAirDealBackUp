import React, { useEffect, useState } from 'react'

import NavHeroBar from './NavHeroBar';
import OurServices from '../OurServices';
import AboutFlight from '../AboutFlight';
import LearnMore from '../LearnMore';
import Testimonials from '../Testimonials_Section/Testimonials';
import ShowEstimates from './Demand_Search/ShowEstimates';
import PushSearchRes from './Push_Search/PushSearchRes';
import OurFleets from './Our_Fleets/OurFleets';
import axios from 'axios';
import ContactusMain from '../Forms/Enquiry_Forms/ContactusMain'
import { message } from 'antd';

function MainHomeComp() {

    const [components, setComponents] = useState([]);


    useEffect(() => {
        const fetchComponents = async () => {
            try {
                // const response = await axios.get('http://localhost:8000/api/components');
                // const response = await axios.get('https://my-air-deal-server.vercel.app/api/components');
                setComponents(response.data);
            } catch (error) {
                message.error('Server Down To Switch Components');
            }
        };
        fetchComponents();
    }, []);

    const componentMapping = {
        'NavHeroBar': NavHeroBar,
        'ShowEstimates': ShowEstimates,
        'OurServices': OurServices,
        'AboutFlight': AboutFlight,
        'LearnMore': LearnMore,
        'OurFleets': OurFleets,
        'PushSearchRes': PushSearchRes,
        'Testimonials': Testimonials,        
        'ContactPage': ContactusMain,        
    };





    return (
        <div className="Home">
            {components.map((componentId) => {
                const Component = componentMapping[componentId];
                return <Component key={componentId} />;
            })}
        </div>
    );
}

export default MainHomeComp