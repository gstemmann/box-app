import { React } from 'react';

const Box = ({ color, width, height, removeBox }) => {

    return (
        <div 
            onClick={ removeBox }
            className="Box"
            style={{ 
                backgroundColor: color,
                width: `${width}px`,
                height: `${height}px`
            }}>
        
        </div>
    );
}

export default Box;