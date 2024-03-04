import Image from "next/image";
import { useState } from "react";

interface Props {
    image: string
    imageAlt: string
    longDescription: string
    name: string
}

export function Button( props : Props) {

    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                className='block ease-in-out duration-500 mx-auto hover:scale-110'
                onClick={() => setShowModal(true)}>
                <Image
                    className="projectImage"
                    src={ props.image }
                    alt={ props.imageAlt }
                    height={300}
                    width={550}
                />
            </button>
            {showModal ? (
                <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full groovy-cream outline-none focus:outline-none">
                            <div className="flex items-start justify-between p-5">
                                <h3 className="text-3xl font=semibold">{ props.name }</h3>
                            </div>
                            <hr></hr>
                            <div className="relative p-6 flex-auto">
                                { props.longDescription }
                            </div>
                            <hr></hr>
                            <div className="flex items-center justify-end p-6">
                                <button
                                    className="bg-blue-200 hover:bg-blue-300 active:bg-blue-400 focus:outline-none focus-visible:ring uppercase px-6 py-2 text-sm mr-1 mb-1"
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
        </>
    );
}