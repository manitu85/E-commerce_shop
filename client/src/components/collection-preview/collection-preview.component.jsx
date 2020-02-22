import React from 'react'
import { withRouter } from 'react-router-dom'

import CollectionItem from '../collection-item/collection-item.component'

import { CollectionPreviewContainer, CollectionTitle, PreviewContainer} from './collection-preview.styles'


const CollectionPreview = ({ title, items, history, match, routeName }) => {
  
  let previewItems = items
    .filter((item, idx) => idx < 4)
    .map(item => (
      <CollectionItem key={item.id} item={item} />
    ))

  return (
    <CollectionPreviewContainer>
      <CollectionTitle onClick={() => history.push(`${match.path}/${routeName}`)}>
        {title.toUpperCase()}
      </CollectionTitle>
      <PreviewContainer>
        { previewItems }
      </PreviewContainer>
    </CollectionPreviewContainer>
  )
}

export default withRouter(CollectionPreview)