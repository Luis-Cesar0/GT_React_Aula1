
export default function Cartao({nome,img,desc}){
    return(
        <div class="card" style={{width: "18rem;"}}>
  <img src={img} class="card-img-top" alt={nome} />
  <div class="card-body">
    <h5 class="card-title">{nome}</h5>
    <p class="card-text">{desc}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    )
}