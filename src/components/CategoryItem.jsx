import React from 'react';

const CategoryItem = (props) => <li onClick={() => props.changeCategory(props.item)}>{props.item}
</li>;

CategoryItem.propTypes = {
  changeCategory: React.PropTypes.func.isRequired,
  item: React.PropTypes.object.isRequired,
};

export default CategoryItem;
