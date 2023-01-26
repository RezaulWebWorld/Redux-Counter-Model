import React, {useRef} from 'react';
import {Button, Card} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {increment, decreament, setInput} from "../Redux/State/SliceCounter";

const Count = () => {
    const myReference=useRef()
    const count=useSelector((state)=>state.count.value)
    const dispatcher=useDispatch()
    return (
        <div className="bg-danger p-3">
            <Card style={{ width: '18rem' }}>

                <Card.Body>
                    <Card.Title>Counter app</Card.Title>
                    <Card.Text>
                        {count}
                    </Card.Text>
                   < div className="px-3"> <Button variant="primary" onClick={()=>dispatcher(increment())} >Increase</Button>
                       <Button variant="primary"  onClick={()=>dispatcher(decreament())}>Decrease</Button></div>
                    <Card.Text>
                        <input ref={myReference} type='number' className="form-control"/>
                        <Button variant="primary" onClick={()=>dispatcher(setInput(myReference.current.value))}>setVale</Button>
                    </Card.Text>

                </Card.Body>
            </Card>
        </div>
    );
};

export default Count;