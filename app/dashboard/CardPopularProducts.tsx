
"use client";
import { useGetDashboardMetricsQuery } from '@/state/api';
import { Container, Flex, Skeleton, Text } from '@radix-ui/themes';
import { CloudAlert, ShoppingBag } from 'lucide-react';
import React from 'react'
import Rating from '../(components)/Rating';


const CardPopularProducts = () => {
    const { data: dashboardMetrics , isLoading, error: isError }  = useGetDashboardMetricsQuery();
  return (
    <div className='row-span-3 xl:row-span-6 bg-whiite shadow-lg rounded-2xl pb-16 hover:scale-105 transition-transform duration-300 ease-in-out'>
        {
            isLoading ? (
                <>
               
         {
            Array.from({ length: 5}, (_, index) => (
            <Container size="1" className='m-5' key={index}>
                <Flex direction="column" gap="2">
                <Text>
                    <Skeleton>Lorem ipsum dolor sit amet.</Skeleton>
                </Text>

                <Skeleton>
                    <Text>Lorem ipsum dolor sit amet</Text>
                </Skeleton>
             </Flex>
            </Container>
            ))
         }
                </>
            ): (
                <>
                <p className='text-md font-semibold px-7 pt-5 pb-2'>Popular Products</p>
                <hr />
                {
                    isError ? (
                        <div className='flex flex-col items-center justify-center h-full'>
                            <CloudAlert  className='w-10 h-10 my-10 text-red-500' />
                            <div className='text-lg font-bold text-red-500'>Error fetching data</div>
                        </div>
                    ): null
                }
                <div className='overflow-auto h-full'>
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
                </>
            ) 
        }
    </div>
  )
}

export default CardPopularProducts