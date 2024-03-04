import me from '@/app/data/me.json'

export default function ExperienceTable() {

    const experienceList = me.experience;

    return (
        <div className='container mx-auto'>
            {experienceList?.map((experience) => (
                <>
                    <hr></hr>
                    <div className='mb-10' key={ experience.id }>
                        <div className='md:flex md:flex-row my-4 text-2xl'>
                            <div className='basis-1/2'>{ experience.title }</div>
                            <div className='basis-1/2'>{ experience.company }</div>
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
                </>
            ))}
        </div>
    );
}