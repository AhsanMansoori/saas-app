'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const navitems = [
    { label: "Home", href: "/" },
    { label: "Companions", href: "/companions" },
    { label: "My Journey", href: "/my-journey" },
]

const NavItems = () => {

    const pathname = usePathname();

    return (
        <nav className="flex items-center gap-4">
            {navitems.map(({label, href}) => (
                <Link href={href} key={label} className={cn(pathname === href && 'text-violet-400 font-bold background-secondary underline underline-offset-4 decoration-2', ' hover:text-violet-400 hover:underline hover:decoration-2 hover:underline-offset-4 transition-all')}>
                    {label}
                </Link>
            ))}
        </nav>
    )
}

export default NavItems;
