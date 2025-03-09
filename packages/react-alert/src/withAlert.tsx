import React from 'react'
import DefaultContext from './Context'

const withAlert =
  (Context = DefaultContext) =>
  (WrappedComponent: React.FC) => {
    const WithAlert = (
      props: typeof WrappedComponent.propTypes,
      forwardedRef: React.ForwardedRef<HTMLDivElement>,
    ) => (
      <Context.Consumer>
        {(alert) => (
          <WrappedComponent ref={forwardedRef} {...props} alert={alert} />
        )}
      </Context.Consumer>
    )

    WithAlert.displayName = `WithAlert(${
      WrappedComponent.displayName || WrappedComponent.name || 'Component'
    })`

    return React.forwardRef(WithAlert)
  }

export default withAlert
