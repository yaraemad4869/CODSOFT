import React from 'react'

const Contact = () => {
    return (
        <section id='contact'>
            <div>
                <h1 className="capitalize">Contact Me</h1>
                <form action="">
                    <div>
                        <label htmlFor="name"><h2>name</h2></label>
                        <input type="text" id='name' name='name' placeholder='Enter Your Name' />
                    </div>
                    <div>
                        <label htmlFor="email"><h2>email</h2></label>
                        <input type="text" name='email' placeholder='Enter Your Email' />
                    </div>
                    <div>
                        <label htmlFor="message"><h2>message</h2></label>
                        <textarea name="message" id="message" placeholder='Enter Your Message'></textarea>
                    </div>
                    <button>send</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
