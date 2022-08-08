export const Home = (e) => {
// e.preventDefault()
  console.log('Você clicou em enviar.')
  return (
<section>
  <h1>Hello, user! </h1>
  <div className="listMovies">
    <h2>All movies</h2>
    <figure>
      <ul>
        <li>
      <img src="https://disneyplusbrasil.com.br/wp-content/uploads/2021/12/Encanto-Disney-Plus-1024x576.jpg" width={200}/>Encanto</li>
      <li><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvrmjEUX9jPsztJpLJ1W2ul5Q_yQpYoqET8w&usqp=CAU" width={200} /> Carros</li>
      </ul>
    </figure>
  </div>
</section>
  )
}
