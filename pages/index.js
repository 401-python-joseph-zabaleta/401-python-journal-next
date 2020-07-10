


const url = 'https://drf-snacks-api.herokuapp.com/api/v1/snacks/';




export default function Home(props) {
  return (
    <div className="container">
      <p>Hello this is my front end!</p>
      <p>{props.snacks.length}</p>
    </div>
  )
}

export async function getServerSideProps() {

  const response = await fetch(url);
  const data = await response.json();

  return {
    props: {
      snacks: data,
    }
  }

}
