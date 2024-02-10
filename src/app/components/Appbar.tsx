import Image from 'next/image'

export default function Appbar() {
    return (
        <div className="static bg-primary-color left-0 top-0 flex w-full justify-center p-4">
            <Image
                src="/sleno.svg"
                alt="Sleno Logo"
                width={159}
                height={58}
                priority
            />
        </div>
    )
}