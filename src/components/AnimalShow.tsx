import cat from '../images/cat.svg';
import dog from '../images/dog.svg';
import bird from '../images/bird.svg';
import cow from '../images/cow.svg';
import gator from '../images/gator.svg';
import horse from '../images/horse.svg';
import heart from '../images/heart.svg';

import { useState } from 'react';

interface AnimalShowProps {
    type: string;
    key?: string | number; // Optional key prop for React list rendering
}

// Mapping animal types to their respective SVG images
// key is the animal type and value is the corresponding SVG image path
const svgMap: { [key: string]: string } = {
    cat,
    dog,
    bird,
    cow,
    gator,
    horse,
    heart
};



export default function AnimalShow({ type }: AnimalShowProps) {
    const [imageClickCount, setImageClickCount] = useState<number>(10);

    const handleImageClick = () => {
        setImageClickCount(prevCount => prevCount + 1);
    }
    return (
        <div onClick={handleImageClick} className="text-black p-10 text-3xl">
            AnimalShow Component: {type}
            <img src={svgMap[type]} alt={type} className="w-32 h-32 mx-auto" />
            <img src={svgMap["heart"]} alt="heart" style={{ width: `${imageClickCount * 5}px`, height: `${imageClickCount * 5}px` }} 
            className="mx-auto" />
        </div>
    );
}