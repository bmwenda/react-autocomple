
interface APIData {
  API: string,
  Link: string
}

interface SuggestionItemProps {
  suggestion: APIData,
  handleClick: (value: string) => void,
  searchTerm: string
}

const SuggestionItem = ({ suggestion, handleClick, searchTerm }: SuggestionItemProps) => {
  // TODO: Avoid manipulating the DOM with innerHTML
  const {API: title} = suggestion;
  const regex = new RegExp(`${searchTerm}`, 'gi');
  const matching: RegExpMatchArray | null = title.match(regex);
  const highlightedTitle = matching ? title.replace(regex, `<mark>${matching[0]}</mark>`) : title;
  return (
    <li onClick={() => handleClick(suggestion.API)}>
       <div dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
    </li>
  )
}

export default SuggestionItem;
