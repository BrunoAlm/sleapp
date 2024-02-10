import Image from 'next/image'


export default function Fab() {
    return (
        <button className="absolute bg-primary-color size-16 right-4 bottom-4 rounded-2xl flex items-center justify-center">
             <Image
                src="/add-icon.svg"
                alt="Sleno Logo"
                width={50}
                height={50}
                className='dark:invert'
                priority
            />
        </button>
    )
}