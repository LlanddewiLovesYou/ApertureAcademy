import React from 'react'


class BootModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      booting: false,
      finshed: false
    }
  }

  render() {
    if (this.state.booting) {
      return (
        <main>
          <img src='' />
          this.setState({booting: true})
        </main>
      )
    }
  }

}
