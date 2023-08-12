import React from 'react';

export const EmailTemplate = ({ userEmail, messageText }) => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Email to Support</title>
    </head>
    <body>
      <div
        style={{
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '50px',
          padding: '20px',
          backgroundColor: 'var(--avatar-bg-color)',
          boxShadow:
            'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
        }}
      >
        <div
          style={{
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '5px',
            backgroundColor: 'var(--active-color)',
            marginTop: '20px',
            color: 'var(--primary-text-color)',
            fontWeight: '500',
          }}
        >
          <p>Email: {userEmail}</p>
          <p>Message: {messageText}</p>
        </div>
        <div
          style={{
            textAlign: 'center',
            marginTop: '20px',
            fontSize: '12px',
            fontWeight: '400',
            color: 'var(--primary-text-color)',
          }}
        >
          <p>
            This is an automated message. Please do not reply to this email.
          </p>
        </div>
      </div>
    </body>
  </html>
);
