import * as React from 'react'
import Button from 'antd/lib/button'

import * as styles from './index.scss'
 
class Test extends React.Component {
    render() {
        return(
            <div className={styles.test}>
                <Button type="primary">Button</Button>
            </div>
        )
    }
}


export default Test