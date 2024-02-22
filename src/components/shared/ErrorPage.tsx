import image from '../../assets/images/crashed.jpg';

const ErrorPage = () => {
  const handleClick = () => {
    // prefering replace() as we do not want the user to navigate back to a page in error state
    // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
    window.location.replace('/');
  }

  return (
    <div className="App">
      <p style={{ fontSize: '2rem', fontStyle: 'italic' }}>Oh no, we crashed!</p>
      <img src={image} alt='crashed' />
      <button onClick={handleClick}>Take me home</button>
    </div>
  )
}

export default ErrorPage;
