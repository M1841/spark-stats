import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth/next";
import {
    Avatar,
    AvatarImage,
    AvatarFallback,
} from "@/components/shadcn/avatar";
import Link from "next/link";
import { LogOut } from "lucide-react";

export default async function HomeSection() {
    const session = await getServerSession(authOptions);
    const user = session?.user;
    if (user?.name && user?.image) {
        return (
            <main className='mt-[3.25rem] p-6'>
                <header className='flex gap-2'>
                    <Avatar className='h-12 w-12'>
                        <AvatarImage src={user.image as string} />
                        <AvatarFallback>
                            {user.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                    </Avatar>
                    <div className='flex flex-col justify-center items-start'>
                        <h1 className='font-medium w-100'>{user.name}</h1>
                        <Link
                            href='/api/auth/signout'
                            className='text-sm text-neutral-600 dark:text-neutral-400 flex justify-start items-center gap-1'
                        >
                            Sign Out <LogOut size={14} />
                        </Link>
                    </div>
                </header>
            </main>
        );
    }
    return null;
}
