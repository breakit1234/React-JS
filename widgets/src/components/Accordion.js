import React from 'react';

const Accordion = ( {items} ) => {
    const renderedItems = items.map(item =>{
        return <React.Fragment key={item.title}>
            <div class="active title">
                <i class="dropdown icon"></i>
                    {item.title}
            </div>
            <div class="active content">
                <p>
                    {item.content}
                </p>
            </div>
        </React.Fragment>
    });
    return <div className="ui styled accordion">{renderedItems}</div>;
}

export default Accordion;