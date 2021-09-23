import React from 'react'

function AuthBlock() {
  return (
    <div>
       <Fragment>
            <Header />
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/user' component={UserProfile} />
                <Redirect from="/" to='login' />
            </Switch>
        </Fragment>
    </div>
  )
}

export default AuthBlock
