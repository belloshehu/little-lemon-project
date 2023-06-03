import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Hero from './components/Hero';
import Featured from './components/Featured';
import BookingForm from './components/BookingForm';
import BookingSlotItems from './components/BookingSlotItems';
import HomePage from './pages/HomePage';
import Testimonials from './components/Testimonials'
import About from './components/About'


describe('Booking form', () => {
  test('renders booking form', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText(/Book now/i);
    expect(headingElement).toBeInTheDocument();
  });
  
  test('renders available time slots in the booking form', () => {
    render(<BookingForm />)
    const  headingElement = screen.getByText(/Available time slots/i)
    expect(headingElement).toBeInTheDocument()
  })

  test('Display booked time slots for a selected date', () =>{
    render(<BookingForm />)
    const dateInput = screen.getByLabelText(/choose date/i)
    const timeSelect = screen.getByLabelText(/choose time/i)
    const numberInput = screen.getByLabelText(/number of guests/i)
    const occasionSelect = screen.getByLabelText(/occasion/i)
    const submitButton = screen.getByRole('button')

    // confirm elements' presence
    expect(dateInput).toBeInTheDocument()
    expect(timeSelect).toBeInTheDocument()
    expect(numberInput).toBeInTheDocument()
    expect(occasionSelect).toBeInTheDocument()
    expect(submitButton).toBeInTheDocument()

    // fill the form 
    fireEvent.change(dateInput, {target: {value: '2023-01-20'}})
    fireEvent.change(timeSelect, {target: {value: '17:00'}})
    fireEvent.change(numberInput, {target: {value: '3'}})
    fireEvent.change(occasionSelect, {target: {value: 'Anniversary'}})

    // submit form
    fireEvent.click(submitButton)

    // select the same date to see booked time slots
    fireEvent.change(timeSelect, {target: {value: '19:00'}})
    fireEvent.change(dateInput, {target: {value: '2023-01-20'}})

    // check for heading with "Booked time slots"
    const bookedSlotsHeadingElement = screen.getByText(/booked time slots/i)
    expect(bookedSlotsHeadingElement).toBeInTheDocument()
  })
})


describe('Home Page', () =>{
    
    test('renders Hero section component', () => {
      render(<Hero />)
      const  mainHeadingElement = screen.getByText(/little lemon/i)
      const  subHeadingElement = screen.getByText(/chicago/i)
      expect(mainHeadingElement).toBeInTheDocument()
      expect(subHeadingElement).toBeInTheDocument()
    })
    
    test('renders Testimonials section', () => {
      render(<Testimonials />)
      const  mainHeadingElement = screen.getByText(/testimonials/i)
      expect(mainHeadingElement).toBeInTheDocument()
    })
        
    test('renders About section components', () => {
      render(<About />)
      const headingElement = screen.getByText(/little lemon/i)
      expect(headingElement).toBeInTheDocument()
    })
    
    test('renders Testimonials section', () => {
      render(<Testimonials />)
      const  mainHeadingElement = screen.getByText(/testimonials/i)
      expect(mainHeadingElement).toBeInTheDocument()
    })
})  



