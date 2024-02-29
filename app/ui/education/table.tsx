import me from '@/app/data/me.json'

export default function EducationTable() {

    const educationList = me.education;

    return (
        <>
            {educationList?.map((education) => (
                <div key={ education.id }>
                    <table className='table-auto'>
                        <tbody>
                            <tr>
                                <td>{ education.degree }</td>
                                <td>{ education.name }</td>
                            </tr>
                            <tr>
                                <td>{ education.datesAttended }</td>
                                <td>{ education.aboutDegree }</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            ))}
        </>
    );
}