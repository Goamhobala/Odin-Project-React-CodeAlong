// Hello.jsx
function HiToEveryone(props) {
    return props.people.map(person => <h1 className="Hello" key={person.id}>Hi {person.term}!</h1>);
}

function familiyGenerator(term, id, name){
    return {term, id, name}
}

function Hello() {
    let family = [familiyGenerator("Mom", "Mother", "Nanase"),
                  familiyGenerator("Dad", "Father", "Rajesh"), 
                  familiyGenerator("Sis", "Sister", "Nayuta")];
    return <HiToEveryone people={family} />
}

export default Hello;