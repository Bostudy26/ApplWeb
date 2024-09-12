import { PerspectiveCamera, View } from "@react-three/drei"

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
        className={`border-2 border-red-500 w-full h-full
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
    </View>
  )
}

export default ModelView