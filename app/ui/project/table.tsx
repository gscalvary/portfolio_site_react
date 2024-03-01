import Image from 'next/image';
import me from '@/app/data/me.json'
import { useState } from 'react';

export default function ProjectTable() {

    const projects = me.projects;
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            {projects?.map((project) => (
                <div key={ project.id } className='relative'>
                    <button onClick={() => setShowModal(true)}>
                        <Image
                            src={ project.image }
                            alt={ project.imageAlt }
                            height={300}
                            width={550}
                        />
                    </button>
                    {showModal ? (
                        <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                        <h3 className="text-3xl font=semibold">{ project.name }</h3>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        { project.longDescription }
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                        <button
                                            className="background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                                            type="button"
                                            onClick={() => setShowModal(false)}
                                        >
                                            Close
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null}
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