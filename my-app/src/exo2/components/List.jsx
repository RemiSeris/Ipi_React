import React from 'react';

const List = ({title},{children}) => {
    return (
        <div>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
};
export default List;