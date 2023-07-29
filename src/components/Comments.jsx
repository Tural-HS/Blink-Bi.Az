import React from 'react'

function Comments() {

    let actionLink = '#';
    return (
        <div className="comment-respond mt-5">
            <h4 className="comment-reply-title">Leave your thought</h4>

            <form action={actionLink} method="post" className="comment-form">
                <p className="comment-notes">
                    <span>Your email address will not be published.</span> Required fields are marked <span className="required">*</span>
                </p>
                <div className="row">
                    <div className="col-lg-6">
                        <input className="form-control" type="text" placeholder="Your Name" required />
                    </div>
                    <div className="col-lg-6">
                        <input className="form-control" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="col-12">
                        <textarea className="form-control" placeholder="Message here" required></textarea>
                    </div>
                </div>

                <p className="custom-checkbox">
                    <label>
                        <input type="checkbox" />Save my name, email, and website in this browser for the next time I comment.
                        <span className="checkmark"></span>
                    </label>
                </p>

                <div className="btn-wrap">
                    <span></span>
                    <button type="submit" className="btn">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default Comments
