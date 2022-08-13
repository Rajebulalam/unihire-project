import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Detail = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const { data: details, isLoading } = useQuery(['details'], () =>
        fetch(`https://murmuring-reaches-34980.herokuapp.com/details/${id}`).then(
            res => res.json()
        )
    )

    console.log(details);

    if (isLoading) {
        return <p>Loading....</p>;
    }

    const handleDelete = id => {
        const url = `https://murmuring-reaches-34980.herokuapp.com/details/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                navigate('/');
            })
    }

    return (
        <div className='w-full md:w-11/12 mx-auto px-4 md:px-6 py-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                <div className='bg-primary p-6 rounded-sm'>
                    {
                        details.map(detail => <div key={detail._id}>
                            <h2 className='text-secondary text-xl'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Segment:</span> {detail.Segment} </h2>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Country:</span> {detail.Country} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Product:</span> {detail.Product} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Discount Band:</span> {detail.DiscountBand} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Units Sold:</span> {detail.UnitsSold} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Manufacturing Price:</span> {detail.ManufacturingPrice} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Sale Price:</span> {detail.SalePrice} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Gross Sales:</span> {detail.GrossSales} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Discounts:</span> {detail.Discounts} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Sales:</span> {detail.Sales} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>COGS:</span> {detail.COGS} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Profit:</span> {detail.Profit} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Date:</span> {detail.Date} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Month Number:</span> {detail.MonthNumber} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Month Name:</span> {detail.MonthName} </p>
                            <p className='text-secondary text-xl pt-1'> <span style={{ fontFamily: 'Merienda' }} className='text-white'>Year:</span> {detail.Year} </p>
                        </div>
                        )
                    }
                </div>
                <div className='bg-primary p-6 rounded-sm flex items-center justify-center'>
                    {
                        details?.map(detail => <div key={detail._id}>
                            <button type="submit" className='btn btn-secondary mr-4'><Link to={`form/${detail._id}`}>Edit</Link></button>
                            <button type="submit" className='btn btn-secondary' onClick={() => handleDelete(detail._id)}> Delete </button>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Detail;