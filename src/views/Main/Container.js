import React, { PropTypes as T } from 'react'
import { Jumbotron } from 'react-bootstrap'
import styles from './styles.module.css'

export class Container extends React.Component {
  static contextTypes = {
    router: T.object
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth //sends auth instance to children
      })
    }

    return (
      <Jumbotron>
        <h2 className={styles.mainTitle}>
          <img src="https://lh3.googleusercontent.com/--TNLinvq9hU/VRGY2U37abI/AAAAAAAAACU/S6Y4G54s7ac/w426-h427/ninja.png" />
        </h2>
        {children}
      </Jumbotron>
    )
  }
}

export default Container;
