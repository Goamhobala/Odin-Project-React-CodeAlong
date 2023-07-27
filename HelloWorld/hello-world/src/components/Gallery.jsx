import { getImageUrl } from '../utilities/getImageUrl.js';

function Profile({name, imageSrc, profession, awards, discovered}){
  return <section className="profile">
    <h2>{name}</h2>
    <img 
      className="avatar"
      src={getImageUrl(imageSrc)}
      alt={name}
      width={70}
      height={70}/>
    <ul>
      <li><strong>Profession: </strong>{profession}</li>
      <li><strong>Awards: {awards.length}</strong> ({awards.toString()})</li>
      <li><strong>Discovered: </strong>{discovered}</li>
    </ul>
  </section>
}

export default function Gallery() {
  return (
    
    <div>
      
      <h1>Notable Scientists</h1>
      <Profile
        name="Maria Skłodowska-Curie"
        imageSrc="szV5sdG"
        profession="physicist and chemist"
        awards={["Nobel Prize in Physics", "Nobel Prize in Chemistry", "Davy Medal", "Matteucci Medal"]}
        discovered="polonium (element)"
      />

      <Profile
        name="Gintoki Sakata"
        imageSrc="jwk2vFi"
        profession="Yorozuya"
        awards={["最佳女優賞2020", "最佳新人賞2019"]}
        discovered="阿姆斯特郎炫風噴射阿姆斯特郎砲"
      />
      <section className="profile">
        <h2>Katsuko Saruhashi</h2>
        <img
          className="avatar"
          src={getImageUrl('YfeOqp2')}
          alt="Katsuko Saruhashi"
          width={70}
          height={70}
        />
        <ul>
          <li>
            <b>Profession: </b> 
            geochemist
          </li>
          <li>
            <b>Awards: 2 </b> 
            (Miyake Prize for geochemistry, Tanaka Prize)
          </li>
          <li>
            <b>Discovered: </b>
            a method for measuring carbon dioxide in seawater
          </li>
        </ul>
      </section>
    </div>
  );
}
