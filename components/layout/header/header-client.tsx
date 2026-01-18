'use client'
import Link from 'next/link'
import { Logo } from '@/components/logos/logo'
import { LogOut, Menu, X, User, LayoutDashboard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { cn } from '@/lib/utils'
import { useRouter } from "next/navigation";
import { signOut } from "@/lib/actions/auth-actions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuItems = [
    { name: 'Home', href: '/' }, 
    { name: 'Products', href: '/products' },
]

interface HeroHeaderClientProps {
    session: any 
}

export const HeroHeaderClient = ({ session }: HeroHeaderClientProps) => {
    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isSigningOut, setIsSigningOut] = React.useState(false);
    const [isMounted, setIsMounted] = React.useState(false);

    const router = useRouter();

    React.useEffect(() => {
        setIsMounted(true);
        
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
        
    const handleSignOut = async () => {
        setIsSigningOut(true);
        try{
            await signOut();
            router.push("/login");
        } catch {
            setIsSigningOut(false);
        }
    };
 
    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map(n => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    return (
        <header>
            <nav
                data-state={menuState && 'active'}
                className="fixed z-20 w-full px-2 ">
                <div className={cn('mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12', isScrolled && 'bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5')}>
                    <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2">
                                <Logo />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="absolute inset-0 m-auto hidden size-fit lg:block">
                            <ul className="flex gap-8 text-sm">
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <Link
                                            href={item.href}
                                            className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                            <span>{item.name}</span>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="text-muted-foreground hover:text-accent-foreground block duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                                {!session ? (
                                    <>
                                        <Button
                                            asChild
                                            variant="outline"
                                            size="sm"
                                            className={cn(isScrolled && 'lg:hidden')}>
                                            <Link href="/login">
                                                <span>Login</span>
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            size="sm"
                                            className={cn(isScrolled && 'lg:hidden')}>
                                            <Link href="/signup">
                                                <span>Sign Up</span>
                                            </Link>
                                        </Button>
                                        <Button
                                            asChild
                                            size="sm"
                                            className={cn(isScrolled ? 'lg:inline-flex' : 'hidden')}>
                                            <Link href="/signup">
                                                <span>Get Started</span>
                                            </Link>
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        {isMounted ? (
                                            <DropdownMenu>
                                                <DropdownMenuTrigger asChild>
                                                    <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                                                        <Avatar className="h-10 w-10">
                                                            <AvatarImage 
                                                                src={session.user?.image || session.user?.avatar} 
                                                                alt={session.user?.name || 'User'} 
                                                            />
                                                            <AvatarFallback className="bg-primary text-primary-foreground">
                                                                {session.user?.name ? getInitials(session.user.name) : <User className="h-5 w-5" />}
                                                            </AvatarFallback>
                                                        </Avatar>
                                                    </Button>
                                                </DropdownMenuTrigger>
                                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                                    <DropdownMenuLabel className="font-normal">
                                                        <div className="flex flex-col space-y-1">
                                                            <p className="text-sm font-medium leading-none">
                                                                {session.user?.name || 'Usuario'}
                                                            </p>
                                                            <p className="text-xs leading-none text-muted-foreground">
                                                                {session.user?.email || 'email@example.com'}
                                                            </p>
                                                        </div>
                                                    </DropdownMenuLabel>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem asChild>
                                                        <Link href="/dashboard" className="cursor-pointer">
                                                            <LayoutDashboard className="mr-2 h-4 w-4" />
                                                            <span>Dashboard</span>
                                                        </Link>
                                                    </DropdownMenuItem>
                                                    <DropdownMenuSeparator />
                                                    <DropdownMenuItem 
                                                        onClick={handleSignOut}
                                                        disabled={isSigningOut}
                                                        className="cursor-pointer text-red-600 focus:text-red-600"
                                                    >
                                                        <LogOut className="mr-2 h-4 w-4" />
                                                        <span>{isSigningOut ? 'Signing out...' : 'Sign Out'}</span>
                                                    </DropdownMenuItem>
                                                </DropdownMenuContent>
                                            </DropdownMenu>
                                        ) : (
                                            <div className="h-10 w-10 rounded-full bg-muted animate-pulse" />
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}