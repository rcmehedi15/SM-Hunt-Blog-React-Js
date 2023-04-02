import React from 'react';
import './Question.css'

const Faq = () => {
    return (
        <div className='faq-container'>
            <div class="faq">
                <h1 className='faq-title text-center text-primary'> Questions:</h1>
                <div className='single-question'>
                    <h1> 01: Props vs state</h1>
                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                        <p>
                            <span >Props: </span> Props, on the other hand,make components reusable by giving components the ability to receive data from the parent component in the form of props.
                        </p>
                        <p>
                            <span>State : </span> State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component.

                        </p>
                    </div>
                </div>

                <div className='single-question'>
                    <h1> 02: How does useState work?</h1>
                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                        <p>
                            <span >useState</span> useState is React Hook that allows you to add state to a functional component. It returns an array with two values: the current state and a function to update it. The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called
                        </p>
                    </div>
                </div>
                <div className='single-question'>
                    <h1> 03: Purpose of useEffect other than fetching data.</h1>
                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                        <p>
                            <span >useEffect</span>The useEffect hook in React is used to perform side effects in function components. While fetching data from an API is one common use case for useEffect, there are several other purposes for which it can be used:


                            Updating the document title: You can use useEffect to update the document title based on the state of your component.
                            Animations: useEffect can be used to trigger animations based on state changes
                            Timer functions: You can use useEffect to set up and cancel timer functions in your component.

                        </p>
                    </div>
                </div>
                <div className='single-question'>
                    <h1> 04: How Does React work?</h1>
                    <div className='answer'><span className='bg-danger'>Answer:</span> <br /> <br />
                        <p>
                            <span >React. js</span> The React. js  framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.
                        </p>
                    </div>
                </div>

                <div className='  p-2 text-center text'>
                    <p>Copyright © <a href="https://www.facebook.com/rcmehedi15" target='_blank' className='text-decoration-none'>MD Mehedi Hasan</a> | HmdMehedi2016@gmail.com</p>
                </div>

            </div>
        </div>
    );
};

export default Faq;