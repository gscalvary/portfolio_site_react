import me from '@/app/data/me.json'

export default function ExperienceTable() {

    const experienceList = me.experience;

    return (
        <>
            {experienceList?.map((experience) => (
                <div key={ experience.id }>
                    <table className='table-auto'>
                        <tbody>
                            <tr>
                                <td>{ experience.title }</td>
                                <td>{ experience.company }</td>
                            </tr>
                            <tr>
                                <td>{ experience.datesWorked }</td>
                                <td>{ experience.role }</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='table-auto'>
                        <tbody>
                            {experience.accomplishments?.map((accomplishment) => (
                                <tr>
                                    <td>{ accomplishment.description }</td>
                                </tr>
                            ))}
                            <tr>
                                <td>{ experience.skills }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </>
    );
}