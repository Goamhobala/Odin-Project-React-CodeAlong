import { getImageUrl } from '../utilities/getImageUrl.js';

function Profile({name, imageSrc, profession, awards, discovered}){
  return <section className="profile">
    <div className="profile__pic">
      <img
        className="profile__avatar"
        src={getImageUrl(imageSrc)}
        alt={name}
        width={70}
        height={70}/>
    </div>
    <div className='profile__info'>
      <h2>{name}</h2>
      <ul>
        <li><strong>Profession: </strong>{profession}</li>
        <li><strong>Awards: {awards.length}</strong> ({awards.toString()})</li>
        <li><strong>Discovered: </strong>{discovered}</li>
      </ul>
    </div>
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
    </div>
  );
}
