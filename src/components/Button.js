export default function Button(props) {
  
  return (<>
    <button {...props}>{props.text}</button>
  </>);
}