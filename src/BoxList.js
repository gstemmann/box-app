import { React, useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuid } from 'uuid';

const BoxList = () => {
        const INITIAL_STATE = [
            {
                color: 'red',
                width: '100px',
                height: '100px'
            }]
        
        const [boxes, setBoxes] = useState(INITIAL_STATE);


        
        const addBox = (box) => {
            let newBox = {...box, id: uuid()};
            setBoxes( boxes => [...boxes, newBox]);
        }
        const removeBox = (index) => {
            setBoxes(boxes.filter((box, i) => i !== index));
        }

        return (
            <div className="BoxList">
                <NewBoxForm addBox={addBox} />
                {boxes.map(({ id, color, width, height, removeBox }) => (
                    <Box removeBox={removeBox} key={uuid()} color={color} width={width} height={height} />
                ))}
            </div>
        );
}

export default BoxList;