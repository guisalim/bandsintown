import React from 'react'
import { mount, shallow } from 'enzyme'
import Component from './component'

describe('[Component] historyList: ', () => {
    const history = [
        { "name": "Sublime", "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/178238.jpeg", "facebook_page_url": "https://www.facebook.com/pages/Fans-of-Sublime/492922824101357",  "upcoming_event_count": 0 },
        { "name": "eminen", "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/214050.jpeg", "facebook_page_url": "https://www.facebook.com/pages/Eminen/208591212655630", "upcoming_event_count": 0 },
        { "name": "Shakira", "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/8518614.jpeg", "facebook_page_url": "https://www.facebook.com/shakira", "upcoming_event_count": 51 }
    ]

    it('shallows renders correctly => ', () => {
        expect(shallow(<Component history={history} />))
    })
})