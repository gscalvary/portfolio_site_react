import { title } from "process";

interface Props {
    titles: Array<string>
}

export default function HorizontalScroller ( props : Props ) {

    const titleHtml = props.titles?.map(title =>
        <>
            <div className="whitespace-nowrap">{ title }</div>
            <div className="text-sky-300">&gt;</div>
        </>
    );

    return (
        <div className='groovy-chocolate h-9 mb-5 overflow-hidden'>
            <div className="align-middle flex font-bold gap-x-6 h-full justify-between scroll-right-to-left text-2xl">
                { titleHtml }
                { titleHtml }
            </div>
        </div>
    );
}