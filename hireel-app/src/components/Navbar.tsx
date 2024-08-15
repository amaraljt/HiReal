// src/components/Navbar.tsx import React from 'react';

import React from 'react';
import Link from 'next/Link';
import Image from 'next/image';
import Logo from '../../public/assets/images/HiReel_Logo.jpg';

export default function Navbar() {
  return(
    <nav className="flex items-stretch container-None h-12 mb-6 p-4 border-b border-b-white">
      <div className="flex">
        <div>
          <Image 
            src={Logo}
            alt="logo"
            width={30}
            height={30}
            priority
            />
        </div>
        <div>
          <Link href='/'> CS2 </Link>
        </div>
      </div>
    </nav>
  );
}

