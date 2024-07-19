import React from 'react';
import PropTypes from 'prop-types';

function List(props) {
    const itemList = props.item;
    const category = props.category;

    // Mapping the filtered items to list items
    const listItems = itemList.map(item => (
        <li key={item.id}>
            {item.name}: <b>{item.cal}</b>
        </li>
    ));
    
    return (
        <>
            <h3 className='list-category'>{category}</h3>
            <ol className='list-items'>{listItems}</ol>
        </>
    );
}

List.propTypes = {
    category: PropTypes.string,
    item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        cal: PropTypes.string.isRequired,
    })),
};

List.defaultProps = {
    category: "Category",
    item: [],
};

export default List;
