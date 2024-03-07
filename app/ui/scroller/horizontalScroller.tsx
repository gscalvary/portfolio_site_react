import { title } from "process";

interface Props {
    titles: Array<string>
}

export default function HorizontalScroller ( props : Props ) {

    const titleHtml = props.titles?.map(title =>
        <span className="banner">{ title }</span>
    );

    return (
        <div className='flex font-bold groovy-chocolate h-9 items-center justify-start mb-5 overflow-hidden text-center text-2xl whitespace-nowrap'>
            <div className="scroll-right-to-left">
                { titleHtml }
            </div>
            <div className="scroll-right-to-left">
                { titleHtml }
            </div>
        </div>
    );
}