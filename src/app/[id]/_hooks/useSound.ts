import {useEffect, useMemo, useRef, useState} from "react";
import {Howl} from "howler"

const useSound = (src: string) => {
    const [sound, setSound] = useState<Howl | null>(null)

    const soundRef = useRef<Howl | null>(null)

    useEffect(() => {
        soundRef.current = new Howl({src})
        setSound(soundRef.current)

        return () => {
            soundRef.current?.unload()
        }
    }, [src])

    const play = () => {
        sound?.stop()
        sound?.play()
    }

    return {play}
}

export default useSound