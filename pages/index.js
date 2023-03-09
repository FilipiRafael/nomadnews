import { useState } from 'react';

function Home() {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: '2rem',
        width: '90vw',
        height: '100vh'
      }}
    >
      <div>
        <h1>Will you marry me?</h1>
        <p>It's been a long time coming, but I think it's time to take the next step.</p>
        <p>Will you marry me?</p>

        {
          !isClicked && (
            <img src='https://media1.popsugar-assets.com/files/thumbor/pNfTl_b5ISNqucv8azVr5SurN6E/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/03/26/813/n/1922283/ed50546ecf19557b_marry/i/His-proposal-still-makes-us-tear-up.gif' alt='marry me gif' />
          )
        }

        {!isClicked && (
            <button
              onClick={() => setIsClicked(true)}
              style={{
                backgroundColor: "red",
                color: "white",
                padding: "1rem",
                border: "none",
                borderRadius: "0.5rem",
                fontSize: "1.5rem",
                cursor: "pointer",
                outline: "none",
                '&:hover': {
                  backgroundColor: 'blue'
                }
              }}
            >
            Yes, yes, yes!
            </button>
        )}

        {
          isClicked && (
            <img
              src='https://media1.popsugar-assets.com/files/thumbor/mSH3x5LPD-MYvWUkFGEutGRbx_I/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2014/03/26/813/n/1922283/7da6776e5106bce6_kiss2/i/Young-Marshall-Lily-get-us-every-time.gif'
              alt='marry me gif'
              style={{
                width: '100%'
              }}
            />
          )
        }

        <p>Love, <br />Your future husband</p>
      </div>
    </div>
  );
}

export default Home;