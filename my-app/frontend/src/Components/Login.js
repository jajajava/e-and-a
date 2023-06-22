import React from "react";

function Login() {

    return (
        <div className="background" style={{ backgroundColor: 'rgba(255, 166, 0, 0.884)' }}>
            <h1 className="loginLogo">🥐 toasty </h1>
            <h1 className="loginGreeting">Welcome!</h1>
            <form className='loginForm'>
            <table>
            <tr>
                <td><button>1</button></td>
                <td><button>2</button></td>
                <td><button>3</button></td>
            </tr>
            <tr>
                <td><button>4</button></td>
                <td><button>5</button></td>
                <td><button>6</button></td>
            </tr>
            <tr>
                <td><button>7</button></td>
                <td><button>8</button></td>
                <td><button>9</button></td>
            </tr>
            </table>
            <button>Log in</button>
            </form>
            <a className='loginAnchorTag' href="/signup">Create an account</a>
        </div>
    )
}


//! REMEMBER TO MAKE SIGNUP/LOGIN PATHS!
//! Stretch goals: Make show password button and/or save password option



export default Login