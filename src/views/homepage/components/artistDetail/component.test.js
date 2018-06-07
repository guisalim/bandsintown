import React from 'react'
import { mount, shallow } from 'enzyme'
import Component from './component'
import { MemoryRouter } from 'react-router-dom'


describe('[Component] artistDetails: ', () => {
    const artist = { "name": "Shakira", "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/8518614.jpeg", "facebook_page_url": "https://www.facebook.com/shakira", "upcoming_event_count": 51 }
    const artist2 = { "name": "eminen", "thumb_url": "https://s3.amazonaws.com/bit-photos/thumb/214050.jpeg", "facebook_page_url": "https://www.facebook.com/pages/Eminen/208591212655630", "upcoming_event_count": 0 }
    const clearArtist = jest.fn()
    const clearFilter = jest.fn()

    it('shallows renders correctly => ', () => {
        expect(shallow(<Component artist={artist} clearArtist={clearArtist} clearFilter={clearFilter} />))
    })

    it('mount correctly => ', () => {
        expect(mount(<MemoryRouter><Component artist={artist} clearArtist={clearArtist} clearFilter={clearFilter} /></MemoryRouter>))
    })

    it('calls clearFilter if the trash-icon is selected => ', () => {
        const wrapper = mount(<MemoryRouter><Component artist={artist} clearArtist={clearArtist} clearFilter={clearFilter} filter={artist} /></MemoryRouter>)
        wrapper.find('i.clear-search').simulate('click')
        expect(clearFilter).toHaveBeenCalledTimes(1)
    })

    it('find all the 3 icons icons on a artist with upcoming events', () => {
        const wrapper = mount(<MemoryRouter><Component artist={artist} clearArtist={clearArtist} clearFilter={clearFilter} /></MemoryRouter>)
        expect(wrapper.find('i.clear-search').length).toBe(1)
        expect(wrapper.find('i.facebook').length).toBe(1)
        expect(wrapper.find('i.music').length).toBe(1)
        expect(wrapper.find('i').length).toBe(3)
    })

    it('find only icons icons on a artist with no upcoming events', () => {
        const wrapper = mount(<MemoryRouter><Component artist={artist2} clearArtist={clearArtist} clearFilter={clearFilter} /></MemoryRouter>)
        expect(wrapper.find('i.clear-search').length).toBe(1)
        expect(wrapper.find('i.facebook').length).toBe(1)
        expect(wrapper.find('i.music').length).toBe(0)
        expect(wrapper.find('i').length).toBe(2)
    })

    it('find image', () => {
        const wrapper = mount(<MemoryRouter><Component artist={artist} clearArtist={clearArtist} clearFilter={clearFilter} /></MemoryRouter>)
        expect(wrapper.find('img').length).toBe(1)
    })
})