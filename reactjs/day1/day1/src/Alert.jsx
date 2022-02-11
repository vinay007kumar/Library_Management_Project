import React from 'react'

function Alertsss(props) {
  return (
    <div>
       <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{props.alert.type}</strong>: {props.alert.msg}
 
</div>
    </div>
  )
}

export default Alertsss
