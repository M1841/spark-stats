"use client"

import { signOut } from "next-auth/react";

export default function SignoutButton() {
    return (
        <button
            onClick={() => signOut()}
            className='text-[0.8rem] text-neutral-600 dark:text-neutral-400 w-fit hover:underline'
        >
            Sign Out
        </button>
    );
}
