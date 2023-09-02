"use client"

import { LogOut } from 'lucide-react';
import { signOut } from "next-auth/react";

export default function SignoutButton() {
    return (
        <button
            onClick={() => signOut()}
            className='flex justify-start items-center p-2 rounded-sm sm:hover:bg-neutral-200/75 sm:dark:hover:bg-neutral-900/75 cursor-pointer gap-2'
        >
            <LogOut size={16} />Sign Out
        </button>
    );
}
