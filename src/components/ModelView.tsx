import { Loader, OrbitControls, PerspectiveCamera, View } from "@react-three/drei"
import Lights from "./Lights"
import Iphone from "./Iphone"
import { Suspense } from "react"
import CanvasLoader from "./Loading"


interface ModelViewProps {
    index: number
    groupRef: any
    gsapType: string
    controlRef: any
    setRationState: any
    item: any
    size: string
}

const ModelView = ({ index, groupRef, gsapType, controlRef, setRationState, item, size} : ModelViewProps) => {
  return (
    <View
        index={index}
        id={gsapType}
        className={`w-full h-full
                ${index === 2} ? 'right-[-100%] : ''
            `}
    >
        {/* Ambient Light */}
        <ambientLight 
            intensity={0.3}
        />

        <PerspectiveCamera
            makeDefault
            position={[0,0,4]}
        />
        <Lights />

        <OrbitControls/>
        <group ref={groupRef}>
            <Suspense fallback={<CanvasLoader/>}>
                <Iphone/>
            </Suspense>
        </group>

    </View>
  )
}

export default ModelView