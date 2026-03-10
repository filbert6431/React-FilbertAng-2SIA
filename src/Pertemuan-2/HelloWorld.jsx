export default function HelloWorld(){
    const propsUserCard = {
        nama: "Goku",
        nim: "999999",
        tanggal: "2025-01-01"
    }

  
    return (
        <div>
            <h1>Hello World</h1>
            <p>Selamat Belajar ReactJs</p>
            <img src="img/Your_Name_poster.png" alt="logo" srcset="" width="100%" />
            <GreetingBinjai> </GreetingBinjai>
            <Quotetext> </Quotetext>
            <UserCard
                  nama="John Doe"
                  nim="123456" 
                  tanggal="2023-01-01"
              />

   <UserCard
                  nama="Adudu"
                  nim="123" 
                  tanggal="2026-01-01"
              />

              <UserCard {...propsUserCard} />

        </div>
    )

  }   
    
function Quotetext() {
const text = "Mulutmu Harimaumu";
    const text2 = "Aku ingin jadi macan";
    return (
        <div>
            <hr/>
            <p>{text.toLowerCase()}</p>
            <p>{text2.toUpperCase()}</p>
        </div>
    )
}


    function GreetingBinjai () {
        return (
            <small>Selamat Datang di Kota Binjai</small>
        )   
    }

    function UserCard(props){
    return (
        <div>
            <hr/>
            <h3>Nama: {props.nama}</h3>
            <p>NIM: {props.nim}</p>
            <p>Tanggal: {props.tanggal}</p>
        </div>
    )
}