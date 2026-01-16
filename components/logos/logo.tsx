import { cn } from '@/lib/utils'


// logo principal con texto
export const Logo = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <img
            src="/logo.png"
            alt="Logo"
            className={cn('h-10 w-auto', className)}
        />
    )
}

// solo el icono del logo

export const LogoIcon = ({ className, uniColor }: { className?: string; uniColor?: boolean }) => {
    return (
        <img
            src="/logo.png"
            alt="Logo"
            className={cn('h-10 w-auto', className)}
        />
    )
}

 
