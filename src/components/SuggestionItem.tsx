import { SuggestionItemProps } from "../types";
import { sanitizeString } from "../utils";

const SuggestionItem = ({ suggestion, handleClick, searchTerm }: SuggestionItemProps) => {
  const {API: title} = suggestion;
  const regex = new RegExp(`${searchTerm}`, 'gi');
  const matching: RegExpMatchArray | null = title.match(regex);
  const escapedText = sanitizeString(title);
  const highlightedTitle = matching ? escapedText.replace(regex, `<mark>${matching[0]}</mark>`) : escapedText;
  return (
    <li onClick={() => handleClick(suggestion.API)}>
       <div dangerouslySetInnerHTML={{ __html: highlightedTitle }} />
    </li>
  )
}

export default SuggestionItem;
