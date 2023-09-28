import React from 'react'
import './lesson_4';
import {handlePromise} from "./lesson_4";

const Lesson4 = () => {
    const firstHandler = () => {
        handlePromise.promise = new Promise((resolve, reject) => {
            handlePromise.resolve = resolve
            handlePromise.reject = reject
        })
    }

    const secondHandler = () => {
        if (handlePromise.resolve) {
            handlePromise.onSuccess('resolved data')
        }
    }

    const thirdHandler = () => {
        if (handlePromise.reject) {
            handlePromise.onError('error message')
        }
    }
    return (
        <div>
            <button id='btn-create-promise' onClick={firstHandler}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={secondHandler}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={thirdHandler}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;