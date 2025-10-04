import React from "react";

interface AccordionProps {
    items: Array<{
        label: string;
        content: string;
    }>
}

export default function Accordion({ items }: AccordionProps) {
    const [expandedIndex, setExpandedIndex] = React.useState<number>(0)

    items.map((item, index) => {
        const isExpanded = index === expandedIndex;
        return (
            <div key={index} className="space-y-4">
                <div className="bg-white rounded-lg shadow p-4 border border-gray-200">
                    <div className="font-semibold text-lg text-gray-800 mb-2">
                        {item.label}
                    </div>
                    <div className="text-gray-600">
                        {item.content}
                    </div>
                </div>
            </div>
        );
    })
}