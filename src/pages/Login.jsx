import { useNavigate } from "react-router-dom"
import Footer from "../components/FooterContent"
import { useState } from "react"
import FooterContent from "../components/FooterContent"
import { supabase } from "../SupabaseClient"


function Login() {

    const navigation = useNavigate()
    let [ emailVal , setEmailVal] = useState("")
    let [ passwVal , setPasswVal] = useState("")

    function checkAuth(e) {

        e.preventDefault()
        if (emailVal === 'admin@gmail.com' && passwVal === "12345") {
            navigation('/dashboard')
            alert('Login Successfully')
        }
        else alert('something went wrong')
        
    }

    return (

        <section>
          

   
            <div className="flex items-center justify-center py-10 px-4 mt-35 mb-8">

                <div className="bg-white shadow-2xl rounded-3xl w-full max-w-xl p-8 border border-gray-200">

         
                    <h2 className="text-3xl font-bold text-center ">Login</h2>
                  

                    <form className="flex flex-col gap-7">

               
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-600">Email</label>
                            <input type="email" onChange={(e) => setEmailVal(e.target.value)}
                                placeholder="Enter your email" 
                                className="placeholder:text-[16px] px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none" 
                            />
                        </div>

                      
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold text-gray-600">Password</label>
                            <input type="password" onChange={(e) => setPasswVal(e.target.value)}
                                placeholder="Enter your password" 
                                className="placeholder:text-[16px] px-4 py-3 rounded-xl border border-gray-400 bg-gray-50 focus:ring-2 focus:ring-green-500 outline-none" 
                            />
                        </div>

                     
                        <button onClick={(e) => checkAuth(e)}
                            className="bg-gradient-to-br p-3 rounded-2xl from-yellow-500 to-orange-600 text-white shadow-lg ring-2 ring-yellow-400">
                            Login
                        </button>

                    </form>

                    <p className="flex justify-center gap-2 p-5 text-gray-700">
                        Don’t have an account?
                        <button onClick={() => navigation('/signup')} className="text-red-500 font-semibold cursor-pointer"> Sign Up</button>
                    </p>

                </div>

            </div>

            <FooterContent />
        </section>

    )

}

export default Login;