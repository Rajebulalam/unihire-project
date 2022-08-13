import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Form = () => {

    const { register, handleSubmit } = useForm();
    const { id } = useParams();

    const onSubmit = async data => {
        const update = {
            Segment: data.Segment,
            Country: data.Country,
            Product: data.Product,
            DiscountBand: data.DiscountBand,
            UnitsSold: data.UnitsSold,
            ManufacturingPrice: data.ManufacturingPrice,
            SalePrice: data.SalePrice,
            GrossSales: data.GrossSales,
            Discounts: data.Discounts,
            Sales: data.Sales,
            COGS: data.COGS,
            Profit: data.Profit,
            Date: data.Date,
            MonthNumber: data.MonthNumber,
            MonthName: data.MonthName,
            Year: data.Year
        }
        console.log(update);

        // Send to the data base
        fetch(`https://murmuring-reaches-34980.herokuapp.com/detail/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert('Details Updated');
            })
    }

    return (
        <div className='w-full md:w-11/12 mx-auto px-4 md:px-6 py-6'>
            <div className='bg-slate-200 p-4'>
                <form onSubmit={handleSubmit(onSubmit)} className='bg-primary w-full md:w-6/12 mx-auto px-a md:p-6'>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Segment</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("Segment")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Country</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("Country")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Product</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("Product")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Discount Band</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("DiscountBand")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Units Sold</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("UnitsSold")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Manufacturing Price</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("ManufacturingPrice")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Sale Price</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("SalePrice")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Gross Sales</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("GrossSales")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Discounts</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("Discounts")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Sales</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("Sales")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">COGS</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("COGS")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Profit</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("Profit")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Date</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("Date")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Month Name</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("MonthName")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Month Number</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("MonthNumber")} />
                    </div>
                    <div className="pb-4">
                        <label style={{ fontFamily: 'Merienda' }} className='font-bold text-white' htmlFor="education">Year</label>
                        <input className='bg-slate-200 p-2 w-full lg:max-w-lg rounded-sm' type="text" {...register("Year")} />
                    </div>
                    <div className='flex items-start justify-center'>
                        <button type="submit" className='btn btn-secondary'> Update Details </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;