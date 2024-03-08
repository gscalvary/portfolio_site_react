import { Button } from '@/app/ui/project/button';
import me from '@/app/data/me.json'

export default function ProjectTable() {

    const projects = me.projects;

    return (
        <>
            <hr className='mb-4'></hr>
            <div className='container mx-auto'>
                {projects?.map((project) => (
                    <div key={ project.id }>
                        <div className='flex flex-row'>
                            <div className='basis-1/3 overflow-hidden'></div>
                            <div className='basis-1/3 overflow-hidden'>
                                <Button image={ project.image } imageAlt={ project.imageAlt } name={ project.name } longDescription={ project.longDescription }/>
                            </div>
                            <div className='basis-1/3 overflow-hidden'></div>
                        </div>
                        <div className='flex flex-row'>
                            <div className='basis-1/3'></div>
                            <div className='basis-1/3'>
                                <div className='text-center mt-4'>
                                    <div className='text-2xl'>{ project.name }</div>
                                    <div>{ project.shortDescription }</div>
                                    <div>{ project.date }</div>
                                    <a className='text-blue-500 hover:underline hover:text-blue-600' href={ project.codeLink } target='_blank'>{ project.codeLinkDesc }</a>
                                </div>
                            </div>
                            <div className='basis-1/3'></div>
                        </div>
                    </div>
                ))}
            </div>
            </>
    );
}