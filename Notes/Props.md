* React props is a way to pass data from parent to child, but not the other way around
* attributes fed to the jsx tags are automatically added to the props object
* You can explicitly pass props

```jsx

```
* You can also passes jsx as props
```jsx
function Card({child}){
	return <div> {child} </div>
}
function ProfilePic(){
	return <img/>
}

export default function App(){
	return <>
	<Card 
		<ProfilePic/>
	/>
	</>
}
```