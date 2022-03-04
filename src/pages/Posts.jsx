import React, { useState }  from 'react'

export const Posts = () => {
	const URL = "https://rickandmortyapi.com/api/character";

	const [card, setCard] = useState([]);
	const [search, setSearch]= useState("");

	const getcard = async () => {
		await fetch(URL)
		.then(response => response.json())
		.then(data => setCard(data.results))
	}
	const handleChange=e=>{
		setSearch(e.target.value);
		filter(e.target.value);
	  }
	  
	  const filter=(searchResult)=>{
		var searchResult=card.filter((element)=>{
		  if(element.name.toString().toLowerCase().includes(searchResult.toLowerCase())
		  || element.name.toString().toLowerCase().includes(searchResult.toLowerCase())
		  ){
			return element;
		  }
		});
		setCard(searchResult);
	  }
	  

    return (
        <>
		<h1 className='text-getCharacter'>Get A Character :D</h1>
        <h1>From Rick And Morty, Yeah?</h1>
		<h3>Search Here Pls UwU</h3>
        <input
          value={search}
          placeholder="Search For Name"
          onChange={handleChange}/>
			{
				card.map(character => ( 
            	<div className='cards'>	
					<h2 className='name-character'>{character.name}</h2>
					<img src={character.image} alt=""></img>
            	</div>
				))
			}
				
                <button className='button3'onClick={getcard}>Click On Me Pls :3</button>    
            
        </>
        
    )
}

