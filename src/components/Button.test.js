import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom' 
import Button from './Button'

//Tests that clicking the buttons calls the event handler only once
test('clicking the button calls event handler once', async () => {
    const text = "Sort ascending"

    const mockHandler = jest.fn()
  
    const { getByText } = render(
      <Button text={text} onClick={mockHandler} />
    )
  
    const button = getByText('Sort ascending')
    fireEvent.click(button)
  
    expect(mockHandler.mock.calls.length).toBe(1)
  })