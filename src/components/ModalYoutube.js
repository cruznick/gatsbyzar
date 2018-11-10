/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react'
import { FiYoutube } from 'react-icons/fi'
import ModalVideo from 'react-modal-video'

class ModalYoutube extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      video: props.video,
    }
    this.openModal = this.openModal.bind(this)
  }

  openModal() {
    this.setState({ isOpen: true })
  }

  render() {
    return (
      <>
        <ModalVideo
          className="titleContent"
          channel="youtube"
          videoId={this.state.video}
          isOpen={this.state.isOpen}
          onClose={() => this.setState({ isOpen: false })}
        />
        <button className="ytButton" type="button" onClick={this.openModal}>
          <FiYoutube className="svgFont" />
        </button>
      </>
    )
  }
}

export default ModalYoutube
