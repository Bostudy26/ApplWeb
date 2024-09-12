import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ModelView from "../components/ModelView";
import { useRef, useState } from "react";
import { yellowImg } from "../utils";

const Model = () => {
    const [size, setSize] = useState('small');
    const [model, setModel] = useState({
        title: 'iPhone 15 pro in Natural Titanium',
        color: ['#8F8A81', '#ffe7b9', '#6f6c64'],
        img: yellowImg,
    })

    // camera control vor the model view
    const cameraControlSmall = useRef();
    const cameraControlLarge = useRef();

    const small = useRef(new THREE.Group())


    useGSAP(() => {
        gsap.to('#heading', {y: 0 , opacity: 1})
    }, []);


  return (
    <section className="common-padding">
        <div className="screen-max-width">
            <h1
                id="heading"
                className="section-heading"
            >
                Take a closer look.
            </h1>

            <div className="flex flex-col items-cente mt-5">
                <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
                    <ModelView/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Model