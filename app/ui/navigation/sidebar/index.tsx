import Link from "next/link";

interface Props {
    isOpen: boolean
    toggle: () => void
}

export default function Sidebar( props : Props ) {
    return (
        <div 
            className="fixed grid groovy-chocolate h-full justify-center left-0 overflow-hidden pt-[120px] sidebar-container w-full z-10"
            style={{
                opacity: `${props.isOpen ? "1" : "0"}`,
                top: ` ${props.isOpen ? "0" : "-100%"}`,
              }}
        >
            <button className="absolute p-5 right-0" onClick={props.toggle}>
                {/* Close icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"> 
                    <path
                        fill="#f1f2d0"
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    />
                </svg>
            </button>
            <ul className="leading-relaxed sidebar-nav text-center text-xl">
                <li>
                    <Link href={'#top'} onClick={props.toggle}>home</Link>
                </li>
                <li>
                    <Link href={'#about'} onClick={props.toggle}>about me</Link>
                </li>
                <li>
                    <Link href={'#experience'} onClick={props.toggle}>experience</Link>
                </li>
                <li>
                    <Link href={'#education'} onClick={props.toggle}>education</Link>
                </li>
                <li>
                    <Link href={'#projects'} onClick={props.toggle}>projects</Link>
                </li>
            </ul>
        </div>
    );
}