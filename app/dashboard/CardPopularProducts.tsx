
"use client";
import { useGetDashboardMetricsQuery } from '@/state/api';
import { CloudAlert, ShoppingBag } from 'lucide-react';
import React from 'react'
import Rating from '../(components)/Rating';
import { SkeletonCard } from '../(components)/Skeleton';


const CardPopularProducts = () => {
    const { data: dashboardMetrics , isLoading, error: isError }  = useGetDashboardMetricsQuery();
  return (
    <div className='row-span-3 xl:row-span-6 bg-white shadow-lg rounded-2xl pb-16 hover:scale-105 transition-transform duration-300 ease-in-out'>
            <h2 className="text-lg font-semibold mb-2 px-7 pt-5">
                Popular Products
            </h2>
            <hr/>
        {
            isLoading ? (
                <>
               
         {
            Array.from({ length: 5}, (_, index) => (
               <SkeletonCard key={index} />
            ))
         }
                </>
            ): (
                <>
              
                {
                    isError ? (
                        <div className='flex flex-col items-center justify-center h-full'>
                            <CloudAlert  className='w-10 h-10 my-10 text-red-500' />
                            <div className='text-lg font-bold text-red-500'>Error fetching data</div>
                        </div>
                    ):  <div className='overflow-auto h-full'>
                    {dashboardMetrics?.popularProducts.map((product) => (
                       <div
                        key={product.productId}
                        className='flex items-center justify-between  px-5 py-7 border-b'
                       >
                        <div className="flex items-center gap-3">
                            <div>
                                img
                            </div>
                            <div className='flex flex-col justify-between gap-1'>
                                <div className='font-bold text-gray-700 text-xl'>
                                    {product.name} {" "}
                                </div>
                                <div className='flex text-sm items-center'>
                                    <span className='font-bold text-blue-500 text-xs'>
                                    GH₵{product.price}
                                    </span>
                                    <span className='mx-2'>|</span>
                                    <Rating rating={product.rating ?? 0}/>
                                </div>
                            </div>
                        </div>

                        <div className='text-xs flex items-center'>
                            <button className='p-2 rounded-full bg-blue-100 text-blue-600 mr-2'>
                                <ShoppingBag className='w-6 h-6'/>
                            </button>
                            {Math.round(product.stockQuantity / 1000)}k Sales
                        </div>

                       </div>
                    ))}
                </div>
                }
               
                </>
            ) 
        }
    </div>
  )
}

export default CardPopularProducts