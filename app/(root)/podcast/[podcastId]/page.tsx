import React from 'react'

const PodcastDetails = ({ params }: { params: { podcastId: string } }) => {
  return (
    <div>PodcastDetails: {params.podcastId}</div>
  )
}

export default PodcastDetails