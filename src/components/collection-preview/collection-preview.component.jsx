import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'
import CollectionPreviewContainer from './collection-preview.styles'

// import './collection-preview.styles.scss'


const CollectionPreview = ({ title, items }) => {
  
  let previewItems = items
    .filter((item, idx) => idx < 4)
    .map(item => (
      <CollectionItem key={item.id} item={item} />
    ))

  return (
    <CollectionPreviewContainer>
      <h1 className='title' >{title.toUpperCase()}</h1>
      <div className='preview' >
        { previewItems }
      </div>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview