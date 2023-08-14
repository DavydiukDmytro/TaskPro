import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import notFoundPage from '../../assets/images/notFoundImg/pngwing-min.png';

const NotFoundPage = () => {
  const [count, setCount] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
    if (count === 0) {
      navigate('/');
    }
    return () => clearInterval(interval);
  }, [count, navigate]);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F2D2BD',
        padding: '20px',
      }}
    >
      <img
        src={notFoundPage}
        alt="funny monster"
        style={{
          width: '250px',
          height: '300px',
        }}
      />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <p
          style={{
            fontFamily: 'Poppins',
            fontSize: '14px',
            color: '#008000',
            lineHeight: '1.5',
            fontWeight: '600',
            marginBottom: '10px',
          }}
        >
          The page you`re looking for is now beyond our reach.
          <br /> Let`s get you ..
          <br />
          Back Home in{' '}
          <span
            style={{
              fontFamily: 'cursive',
              color: '#FFA500',
              fontSize: '30px',
              marginLeft: '10px',
            }}
          >
            {count}
          </span>{' '}
          <br />
          or
          <br />
        </p>
        <p style={{ textAlign: 'center' }}>
          <Link
            style={{
              cursor: 'pointer',
              color: '#DE3163',
              textDecoration: 'underline',
              fontSize: '14px',
            }}
            to="/"
          >
            {} Go to Home Page
          </Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
