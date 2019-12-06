import React from 'react';

const Enter = (props) => {
    
    return (
        <div className="term">
          <dt>
            <span className="emoji" role="img" aria-label="Tense Biceps">
             {props.img}
            </span>
            <span>{props.name}</span>
          </dt>
          <dd>
            {props.description}
          </dd>
        </div>
    );
};

export default Enter;