import './Login.css'
import google from '../../assets/google.svg'

export default function Login ({nombre = 'Diego Linux'}){

    return (

        <section className="sectionForm">

            <form action="" className='loginForm'>

                <div>
                    <img src={google} alt="" id='logoGoogle' />

                    <h2>{nombre}</h2>
                </div>

                <fieldset>
                    <legend >ingresa tu contraseña</legend>
                    <input type="password" placeholder='ingresa tu contraseña'/>
                </fieldset>
                
                <fieldset>
                    <legend >ingresa tu correo electronico</legend>
                    <input type="email" placeholder='ingresa tu correo electronico' />
                </fieldset>

                <button>
                    Siguiente
                </button>


            </form>

        </section>
    )
}