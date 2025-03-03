

import { Star } from 'lucide-react';
import React from 'react'

type RatingProps = {
    rating: number;
}

const index = ({rating}: RatingProps) => {
  return Array.from({ length: 5 }, (_, index) => (
    <Star
    key={index}
    color={index < rating ? '#FFD700' : '#D1D5DB'}
    className='w-4 h-4'
    />
  ));
}

export default index