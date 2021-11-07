import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
const { useState, useEffect, useRef } = React
const { Toast } = bootstrap


function ToastDemo() {
    var [toast, setToast] = useState(false);
    const toastRef = useRef();

    useEffect(() => {
        var myToast = toastRef.current
        var bsToast = bootstrap.Toast.getInstance(myToast)
        
        if (!bsToast) {
            // initialize Toast
            bsToast = new Toast(myToast, {autohide: false})
            // hide after init
            bsToast.hide()
            setToast(false)
        }
        else {
            // toggle
            toast ? bsToast.show() : bsToast.hide()
        }
    },[toast])

    return (
    <div className="py-2">
        <button className="btn btn-success" onClick={() => setToast(toast => !toast)}>
            Toast {toast?'hide':'show'}
        </button>
        <div className="toast position-absolute m-4" role="alert" ref={toastRef}>
            <div className="toast-body">
              Hello, world! This is a toast message.
            </div>
        </div>
    </div>
    )
}
export default ToastDemo;