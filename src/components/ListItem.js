import React from 'react';

const ListItem = ({ suggestion, handleClick, searchTerm }) => {
  // TODO: Avoid manipulating the DOM with innerHTML
  const {API: title} = suggestion;
  const regex = new RegExp(`${searchTerm}`, 'gi');
  const matching = title.match(regex);
  const highlightedTitle = matching ? title.replace(matching, `<mark>${matching}</mark>`) : title
  return (
    <li key={suggestion.LINK} onClick={() => handleClick(suggestion.API)}>
       <div dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
    </li>
  )
}

export default ListItem;
