import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {

    const { data: details, isLoading } = useQuery(['details'], () =>
        fetch(`http://localhost:5000/allDetails`).then(
            res => res.json()
        )
    )

    if (isLoading) {
        return <p>Loading ....</p>;
    }

    return (
        <div className='w-full md:w-11/12 mx-auto px-4 md:px-6'>
            <h2 style={{ fontFamily: 'Merienda' }} className='text-3xl py-6 font-bold text-center'>Unihire Details</h2>
            <div className="overflow-x-auto shadow-sm">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th style={{ fontFamily: 'Merienda' }} className='text-lg text-primary text-center'>Segment</th>
                            <th style={{ fontFamily: 'Merienda' }} className='text-lg text-primary text-center'>Country</th>
                            <th style={{ fontFamily: 'Merienda' }} className='text-lg text-primary text-center'>Product</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            details.map(detail => <tr key={detail._id}>
                                <td className='text-lg text-center'> {detail.Segment} </td>
                                <td className='text-lg text-center'> {detail.Country} </td>
                                <td className='text-lg text-center'> {detail.Product} </td>
                                <td className='py-2 text-center'> <button type="submit" className='btn btn-primary h-2' ><Link to={`inventory/${detail._id}`}>View</Link></button> </td>
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