import React, { useEffect, useRef, useState } from 'react';
import ServiceCard from './ServiceCard';

const Services = () => {

    const [services, setServices] = useState([])
    const [isAsc, setISAsc] = useState(true)
    const searchRef = useRef();
    const [search, setSearch] = useState('')

    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}&order=${ isAsc ? 'asc' : 'desc'}`,{

        })
            .then(res => res.json())
            .then(data => setServices(data))
    }, [isAsc, search])

    const handleSearch = () =>{
        setSearch(searchRef.current.value);
    }

    return (
        <div>
            <div className='text-center mb-6'>
                <p className="text-2xl font-bold text-orange-600">Service </p>
                <h2 className="text-5xl font-bold">Our Service Area</h2>
                <input className='input input-sm' ref={searchRef} type="text" />
                 <button onClick={handleSearch} className='btn btn-success'>Search</button>
                <p>The Majority Have Suffered Alteration In Some Form, By Injected Humour, Or Randomised <br /> Words Which Don't Look Even Slightly Believable. </p>
                <button className='btn btn-wide' onClick={ ()=> setISAsc(!isAsc) }> {isAsc ? 'disc' : 'asc'} </button>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;