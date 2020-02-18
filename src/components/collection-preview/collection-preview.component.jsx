import React from 'react'
import CollectionItem from '../collection-item/collection-item.component'

import { CollectionPreviewContainer, CollectionTitle, PreviewContainer} from './collection-preview.styles'


const CollectionPreview = ({ title, items }) => {
  
  let previewItems = items
    .filter((item, idx) => idx < 4)
    .map(item => (
      <CollectionItem key={item.id} item={item} />
    ))

  return (
    <CollectionPreviewContainer>
      <CollectionTitle>{title.toUpperCase()}</CollectionTitle>
      <PreviewContainer>
        { previewItems }
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default CollectionPreview