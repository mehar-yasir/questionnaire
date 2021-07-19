const fetchData = () => {
  return fetch("https://dataapis.herokuapp.com/questionnaire/")
    .then((response) => response.json())
    .then((data) => console.log(data));
};
export default fetchData;
