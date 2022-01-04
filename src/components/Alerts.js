import React from 'react'

export default function Alerts(props) {
    if(props.alert === null){
        return false;
    }
    return (
        <div className="alert alert-success alert-dismissible fade show" role="alert">
            <strong>{props.alert.type}!</strong> {props.alert.msg}
        </div>
    );
}
