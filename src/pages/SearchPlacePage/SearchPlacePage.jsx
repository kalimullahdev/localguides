import React, { useEffect } from 'react'
import MyApp from '../../weatherComponents/components/app'
import { useLocation } from 'react-router-dom';


export default function SearchPlacePage() {
    const llocation = useLocation();

    useEffect(() => {
        // console.log(llocation.state);
    }, [llocation.state])

    return (
        <>
            <MyApp/>
        </>
    )
}
