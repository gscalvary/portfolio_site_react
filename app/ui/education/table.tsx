import me from '@/app/data/me.json'

export default function EducationTable() {

    const schools = me.education?.map(education =>
        <li key={ education.id }>
            <hr></hr>
            <div className='mb-10'>
                <div className='md:flex md:flex-row my-4 text-2xl'>
                    <div className='basis-1/2'>{ education.degree }</div>
                    <div className='basis-1/2'>{ education.name }</div>
                </div>
                <div className='md:flex md:flex-row mb-2 text-xl'>
                    <div className='basis-1/2 mb-2'>{ education.datesAttended }</div>
                    <div className='basis-1/2'>{ education.aboutDegree }</div>
                </div>
            </div>
        </li>
    );

    return <ul className='container mx-auto'>{ schools }</ul>
}