import React from 'react'
import { mount, shallow } from 'enzyme'
import Component from './component'
import Container from './container'

describe('[Component] searchForm: ', () => {
    const onSubmit = jest.fn()

    it('shallows renders correctly => ', () => {
        expect(shallow(<Component />))
    })

    it('mounts correctly => ', () => {
        const wrapper = mount(<Component />)
        expect(wrapper)
        expect(wrapper.find('input')).toHaveLength(1)
        expect(wrapper.find('form')).toHaveLength(1)
    })

    it('call onSubmit when input is submitted => ', () => {
        
        const wrapper = mount(<Component onSubmit={onSubmit} />)
        wrapper.find('input')
            .simulate('change', { target: { value: 'My new value' } })
            .simulate('submit')
        expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    it('do not call onSubmit when input is submitted with no value', () => {
        const onSubmit = jest.fn()
        const wrapper = mount(<Component onSubmit={onSubmit} />)
        wrapper.find('input').simulate('submit')
        expect(onSubmit).toHaveBeenCalledTimes(0)
    })
})

describe('[Container] searchForm: ', () => {
    const getArtist = jest.fn()
        
    it('shallows renders correctly => ', () => {
        expect(shallow(<Container getArtist={getArtist} />))
    })

    it('mount corerctly => ', () => {
        expect(mount(<Container getArtist={getArtist} />))
    })
})