import Image from 'next/image';
import me from '@/app/data/me.json'
import portfolioPic from '@/public/PortfolioSite.jpg'

export default function ProjectTable() {

    const projects = me.projects;

    return (
        <>
            {projects?.map((project) => (
                <div key={ project.id } className='relative'>
                    <Image
                        src={portfolioPic}
                        alt={ project.imageAlt }
                        placeholder='blur'
                        height={100}
                        width={100}
                        sizes='100vw'
                        className="hidden md:block"
                        style={{objectFit: 'cover'}}
                    />
                    <table className='table-auto'>
                        <tbody>
                            <tr>
                                <td>{ project.name }</td>
                            </tr>
                            <tr>
                                <td>{ project.shortDescription }</td>
                            </tr>
                            <tr>
                                <td>{ project.date }</td>
                            </tr>
                        </tbody>
                    </table>
                    <a href={ project.codeLink } target='_blank'>{ project.codeLinkDesc }</a>
                </div>
            ))}
        </>
    );
}