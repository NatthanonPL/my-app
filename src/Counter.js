import React, {useState} from 'react';
const Counter = () => {
    const [count,setCount]= useState(0);
    const [show,setShow]= useState(true);
    const [value,setValue]=useState("Type here!");
    const onTextChange= event => setValue(event.target.value);
    return (<>
        <div
            onClick={e => console.log('onClick')}
            onMouseEnter={e => console.log('onMouseEnter')}
            onMouseOver={e => console.log('onMouseOver')}
            onMouseDown={e => console.log('onMouseDown')}
            onMouseUp={e => console.log('onMouseUp')}
            onMouseLeave={e => console.log('onMouseLeave')}
        ></div>
        <button onClick={()=>setCount(count+1)}>
            Click me
        </button>
        <p>You clicked {count} times</p>
        <button onClick={()=>setShow(!show)}>
            show/hide

        </button>
        {(show)?"Hello world":" "}
        <input
            type="text"
            value={value}
            onChange={event=>onTextChange(event)}
        />
        <h3>{value.length}</h3>
    </>);
}
export default Counter;