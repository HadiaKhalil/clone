'use client'; // Needed if you're using Next.js App Router

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className='bg-amber-300 text-black p-20'>page heloooooooo</div>
  )
}

export default page