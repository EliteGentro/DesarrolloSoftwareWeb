import React from 'react'

const Card = ({id, name, sprites = [], gender, occupation}: {id: number; name: string; sprites?: string[], gender?: string, occupation?: string}) => {
  const validSprites = (sprites || []).filter(Boolean)
  return (
    <section style={{minHeight:200, marginBottom:16}}>
        <h2 className='text-capitalize'>
            #{id} - {name} 
        </h2>
        <h3 className='text-capitalize'>
            Ocupación: {occupation} <br></br>
            Género: {gender}
        </h3>
        {/*imagemes*/}
        <div>
            {
            validSprites.map(sprite => (
                <img src={sprite} key={sprite} alt={name} style={{maxWidth:140, height:'auto', marginRight:8, display:'inline-block'}}/>
            ))
            }
        </div>
    </section>
  )
}

export default Card