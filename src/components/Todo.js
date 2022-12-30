import React from 'react'
import { faPenToSquare, faTrashCan, faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Todo() {

  return (
    <div className="Todo-Shell">
      <div className="Todo-Checked"><FontAwesomeIcon icon={faSquare} onClick={faSquareCheck} /></div>
      <div className="Todo">
        <div className="Todo-Date">
          <div>October 1</div>
          <div>2023</div>
        </div>
        <div className="Todo-Name">TODO name</div>
        <div className="Todo-Category">Green</div>
      </div>
      {/* <div className="Todo-Edit"><FontAwesomeIcon icon={faPenToSquare} /></div> */}
      <div className="Todo-Delete"><FontAwesomeIcon icon={faTrashCan} /></div>
    </div>
  )
}

export default Todo