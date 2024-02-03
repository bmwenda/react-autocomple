export interface AutoCompleteProps {
  url: string
}

export interface APIData {
  API: string,
  Link: string
}

// The external API returns a function immediately before loading is complete
// Using a union with any to get around this issue
export interface SuggestionsProps {
  suggestions: APIData[]| any,
  handleClick: (value: string) => void,
  searchTerm: string
}

export interface SuggestionItemProps {
  suggestion: APIData,
  handleClick: (value: string) => void,
  searchTerm: string
}

export interface SearchBoxProps {
  value: string,
  setValue: (value: string) => void,
  handleFocus: () => void
}

export interface useDebounceProps {
  value: string,
  debounceRate: number
}

export interface useFetchProps {
  url: string
}
