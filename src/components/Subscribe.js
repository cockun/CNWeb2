import React from "react";

export default function Subscribe() {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us6.list-manage.com/subscribe/post?u=86965ed020b63caf48b05c566&amp;id=f534f52ed1"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <h2>Đăng ký nhận khuyến mãi</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              defaultValue
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            />
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            />
          </div>{" "}
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_7bd56446690088a5528dcb07e_0d9bb024c2"
              tabIndex={-1}
              defaultValue
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              defaultValue="Subscribe"
              name="subscribe"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}


