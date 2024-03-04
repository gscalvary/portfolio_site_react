import me from '@/app/data/me.json'

export default function EducationTable() {

    const educationList = me.education;

    return (
        <div className='container mx-auto'>
            {educationList?.map((education) => (
                <>
                    <hr></hr>
                    <div className='mb-10' key={ education.id }>
                        <div className='md:flex md:flex-row my-4 text-2xl'>
                            <div className='basis-1/2'>{ education.degree }</div>
                            <div className='basis-1/2'>{ education.name }</div>
                        </div>
                        <div className='md:flex md:flex-row mb-2 text-xl'>
                            <div className='basis-1/2 mb-2'>{ education.datesAttended }</div>
                            <div className='basis-1/2'>{ education.aboutDegree }</div>
                        </div>
                    </div>
                </>
            ))}
        </div>
    );
}