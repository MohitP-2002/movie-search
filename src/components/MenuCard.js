import React from 'react'

function MenuCard(props) {
  return (
    <>
     <div class="grid-container">
        {props.map((curElem) => {
          return (
            <>
                <div class="card-body">
                  <h5 class="card-title">{curElem.Title}</h5>
                </div>
            </>
          );
        })}
      </div>
    </>
  )
}

export default MenuCard