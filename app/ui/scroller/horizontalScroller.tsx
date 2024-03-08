export class ScrollEntry {
    id : number;
    text : string;

    constructor (id : number, text : string) {
        this.id = id;
        this.text = text;
    }
}

interface Props {
    scrollEntries: Array<ScrollEntry>
}

export default function HorizontalScroller ( props : Props ) {

    const titleHtml = props.scrollEntries?.map(scrollEntry =>
        <span key={ scrollEntry.id } className="banner">{ scrollEntry.text }</span>
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