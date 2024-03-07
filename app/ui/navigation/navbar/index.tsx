import Link from "next/link";

interface Props {
    toggle: () => void
}

export default function Navbar( props : Props ) {
    return (
        <div className="groovy-chocolate h-20 sticky top-0 w-full z-1">
            <div className="container h-full mx-auto px-4">
                <div className="flex h-full items-center justify-between">
                    <ul className="hidden md:flex gap-x-6">
                        <li>
                            <Link href={'#top'}>home</Link>
                        </li>
                        <li>
                            <Link href={'#about'}>about me</Link>
                        </li>
                        <li>
                            <Link href={'#experience'}>experience</Link>
                        </li>
                        <li>
                            <Link href={'#education'}>education</Link>
                        </li>
                        <li>
                            <Link href={'#projects'}>projects</Link>
                        </li>
                    </ul>
                    <button className="inline-flex items-center md:hidden" onClick={props.toggle} type="button">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="40"
                            height="40"
                            viewBox="0 0 24 24"
                        >
                            <path
                            fill="#f1f2d0"
                            d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}