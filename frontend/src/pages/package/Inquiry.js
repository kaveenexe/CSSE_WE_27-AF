import React from 'react'

const Inquiry = () => {
    return (
        <div class="package-booking">
            <h3>Book This Package</h3>
            <form action="" method="post">
                <label for="name">Name</label>
                <input type="text" id="name" name="name" />

                <label for="email">Email</label>
                <input type="email" id="email" name="email" />

                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />

                <label for="message">Message</label>
                <textarea id="message" name="message"></textarea>

                <button type="submit">Book Now</button>
            </form>
        </div>
    )
}

export default Inquiry
