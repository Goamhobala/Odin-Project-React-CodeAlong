// Hello.jsx
function HiToEveryone(props) {
    return props.people.map(person => <h1 className="Hello" key={person.id}>Hi {person.term} {person.id.includes("Mother") && "🧔🏻‍♀️"}!</h1>);
    // Alternative: return props.people.map(person => <h1 className="Hello" key={person.id}>Hi {person.term} {person.id == "Mother" ? "🧔🏻‍♀️" : ""}!</h1>);
}

function familiyGenerator(term, id, name){
    return {term, id, name}
}


function Hello() {
    let family = [familiyGenerator("Mom", "Mother", "Ai"),
                  familiyGenerator("Stepmom", "Step Mother", "Miyako"),
                  familiyGenerator("Dad", "Father", "Rajesh"), 
                  familiyGenerator("Sis", "Sister", "Nayuta")];
    return <HiToEveryone people={family} />
}

export default Hello;