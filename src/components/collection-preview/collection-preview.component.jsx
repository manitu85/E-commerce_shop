import React from 'react'

import './collection-preview.styles.scss'


const CollectionPreview = ({title, items }) => {
  let previewItems = items
    .filter((item, idx) => idx < 4)
    .map(item => (
      <div key={item.id} >{item.name}</div>
    ))

  return (
    <div className='collection-preview'>
      <h1 className='title' >{title.toUpperCase()}</h1>
      <div className='preview' >
        { previewItems }
      </div>
    </div>
  )
}

export default CollectionPreview