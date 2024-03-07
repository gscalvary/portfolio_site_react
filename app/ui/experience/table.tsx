import me from '@/app/data/me.json'
import HorizontalScroller from '../scroller/horizontalScroller';

export default function ExperienceTable() {


    const titles: Array<string> = me.experience?.filter(function (experience) {
        return experience.id < 4;
    }).map(function (experience) {
        return experience.company;
    });
    
    const experiences = me.experience?.map(experience =>
        <li key={ experience.id }>
            <hr></hr>
            <div className='mb-10'>
                <div className='md:flex md:flex-row my-4 text-2xl'>
                    <div className='basis-1/2'>{ experience.title }</div>
                    <div className='basis-1/2'>{ experience.company } - { experience.location }</div>
                </div>
                <div className='md:flex md:flex-row mb-2 text-xl'>
                    <div className='basis-1/2'>{ experience.role }</div>
                    <div className='basis-1/2'>{ experience.datesWorked }</div>
                </div>
                <div>
                    {experience.accomplishments?.map((accomplishment) => (
                        <div className='mb-2'>{ accomplishment.description }</div>
                    ))}
                    <div className='mt-4'>{ experience.skills }</div>
                </div>
            </div>
        </li>
    );

    return (
        <>
            <HorizontalScroller titles={ titles }/>
            <ul className='container mx-auto px-4'>{ experiences }</ul>
        </>
    );
}