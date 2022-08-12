import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Details = () => {

    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('details.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])

    return (
        <div className='w-full md:w-11/12 mx-auto px-4 md:px-6'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl py-6 font-bold text-center'>Unihire Details</h2>
            <div class="overflow-x-auto shadow-sm">
                <table class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th className='text-lg'>Segment</th>
                            <th className='text-lg'>Country</th>
                            <th className='text-lg'>Product</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map(detail => <tr>
                                <td className='text-lg'> {detail.Segment} </td>
                                <td className='text-lg'> {detail.Country} </td>
                                <td className='text-lg'> {detail.Product} </td>
                                <td className='py-2'> <button type="submit" className='btn btn-primary h-2' >View</button> </td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Details;