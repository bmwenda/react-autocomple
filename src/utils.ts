import { DANGEROUS_CHARACTERS } from "./constants";

// This is not nearly comprehensive, better to rely on an external library
const replaceChars = (char: string) => {
  switch (char) {
    case '&':
      return '&amp;';
    case '<':
      return '&lt;';
    case '>':
      return '&gt;';
    case '"':
      return '&quot;';
    case "'":
      return '&#x27;';
    default:
      return char;
  }
}

export const sanitizeString = (chars: string) => {
  if (typeof chars !== 'string') {
    return chars;
  }

  const sanitized = chars.replace(DANGEROUS_CHARACTERS, replaceChars);

  return sanitized;
}
