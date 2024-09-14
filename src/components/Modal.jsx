import { useState, useEffect, useRef } from 'react';
import { FaWindowClose } from "react-icons/fa";
import Iframe from 'react-iframe'

const embedVid = import.meta.env.VITE_YOU_TUBE;

export default function Modal({ isOpen, trailer, closeModal }) {

    const [listVideos, setListVideos] = useState([])

    useEffect(() => {
        setListVideos(trailer.results)
    }, [trailer]);

    console.log(listVideos)

    if (isOpen) {
        return (
            <div className="modal">
                <div className="modal__content">
                    <div className="modal__nav">
                        <h2>Assista ao trailer:</h2>
                        <FaWindowClose onClick={closeModal} />
                    </div>

                    <Iframe
                        src={`${embedVid}${listVideos[5].key}?autoplay=1`}
                        className="modal__video"
                        allow="autoplay; encrypted-media"
                        display="block"
                        position="relative"
                        autoplay
                    />
                </div>
            </div>
        )
    }

    return null
}
