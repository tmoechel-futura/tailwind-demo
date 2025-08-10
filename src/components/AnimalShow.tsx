import React from 'react';
import cat from '../images/cat.svg';
import dog from '../images/dog.svg';
import bird from '../images/bird.svg';
import cow from '../images/cow.svg';
import gator from '../images/gator.svg';
import horse from '../images/horse.svg';

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
};

export default function AnimalShow({ type, key }: AnimalShowProps) {
    return (
        <div className="text-black p-10 text-3xl">
            AnimalShow Component: {type}
            <img src={svgMap[type]} alt={type} className="w-32 h-32 mx-auto" />
        </div>
    );
}